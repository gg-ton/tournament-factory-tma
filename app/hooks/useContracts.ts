import { useEffect, useState } from 'react';

import {toNano} from "@ton/ton";
import { Address, OpenedContract, Sender } from '@ton/core';

import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from './useTonConnect';

import {JoinTournamentRequest, Tournament} from '../wrappers/Tournament';
import {Team} from '../wrappers/Team';
import {Player} from '../wrappers/Player';

export type CreateTeamRequest = {
    owner: Address;
    participants: Address[];
}

export function useTeamContract(request: CreateTeamRequest) {
    const client = useTonClient();
    const { sender } = useTonConnect();
    const [totalParticipants, setTotalParticipants] = useState<null | number>(null)

    const teamContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = Team.fromAddress(request.owner);

        return client.open(contract) as OpenedContract<Team>;
    }, [client]);

    async function deploy() {
        if (!teamContract) return;
        await teamContract.send(sender, {
            value: toNano("0.25"), bounce: false
        }, {
            $$type: "Deploy",
            queryId: BigInt(0),
        })
    }

    async function addPlayers() {
        if (!teamContract) return;

        setTotalParticipants(null);

        let participantCount = 0;
        request.participants.map(async (p, idx) => {
            await teamContract.send(sender, {
                value: toNano("0.25")
            }, {
                $$type: "AddTeamParticipantRequest",
                player: p,
            })

            participantCount = idx;
        })

        setTotalParticipants(participantCount);
    }

    useEffect(() => {
        deploy()
            .then(addPlayers)
            .catch((err) => console.log(err))
    }, [addPlayers, deploy, teamContract]);

    return {
        totalParticipants,
        address: teamContract?.address.toString(),
    };
}

export type createPlayerRequest = {
    owner: Address;
}

export function usePlayerContract(request: createPlayerRequest) {
    const client = useTonClient();
    const { sender } = useTonConnect();

    const playerContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = Player.fromAddress(request.owner);

        return client.open(contract) as OpenedContract<Player>;
    }, [client]);

    async function deploy() {
        if (!playerContract) return;
        await playerContract.send(sender, {
            value: toNano("0.25"), bounce: false
        }, {
            $$type: "Deploy",
            queryId: BigInt(0),
        })
    }

    useEffect(() => {
        deploy().catch((err) => console.log(err))
    }, [deploy, playerContract]);

    return {
        address: playerContract?.address.toString(),
    };
}

export type createTournamentRequest = {
    owner: Address;
    prizePool: bigint;
    maxParticipantCount: bigint;
    participants: Sender[];
}

export function useTournamentContract(request: createTournamentRequest) {
    const client = useTonClient();
    const { wallet, sender } = useTonConnect();
    const [totalParticipants, setTotalParticipants] = useState<null | number>(null)
    const [totalPrizePool, setTotalPrizePool] = useState<null | number>(null)

    const tournamentContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = Tournament.fromAddress(request.owner);

        return client.open(contract) as OpenedContract<Tournament>;
    }, [client]);

    async function deploy() {
        if (!tournamentContract) return;
        await tournamentContract.send(sender, {
            value: toNano("0.25"), bounce: false
        }, {
            $$type: "Deploy",
            queryId: BigInt(0),
        })
    }

    async function create() {
        if (!tournamentContract) return;

        setTotalPrizePool(null);

        await tournamentContract.send(sender, {
            value: toNano("0.5"), bounce: false
        }, {
            $$type: 'CreateTournamentRequest',
            prizePool: request.prizePool,
            maxParticipantCount: request.maxParticipantCount,
        })

        setTotalPrizePool(Number(request.prizePool));
    }

    async function join() {
        if (!tournamentContract) return;

        setTotalParticipants(null);

        let participantCount = 0;
        request.participants.map(async (s, idx) => {
            await tournamentContract.send(s, {
                value: toNano("0.25")
            }, {
                $$type: 'JoinTournamentRequest',
            })

            participantCount = idx;
        })

        setTotalParticipants(participantCount);
    }

    useEffect(() => {
        deploy()
            .then(create)
            .then(join)
            .catch((err) => console.log(err))
    }, [create, deploy, join, tournamentContract]);

    return {
        totalParticipants,
        totalPrizePool,
        address: tournamentContract?.address.toString(),
    };
}