import {CHAIN, useTonConnectUI, useTonWallet} from '@tonconnect/ui-react';
import {Address, beginCell, Cell, Sender, SenderArguments} from '@ton/core';
import {storeStateInit} from "@ton/ton";

export function useTonConnect(): {
    sender: Sender;
    connected: boolean
    wallet: string | null;
    network: CHAIN | null;
} {
    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();

    return {
        sender: {
            send: async (args: SenderArguments) => {
                let stateInitCell: Cell | null = null;
                if (args.init) {
                    const stateInitBuilder = beginCell();
                    storeStateInit(args.init!!)(stateInitBuilder);
                    stateInitCell = stateInitBuilder.endCell();
                }

                await tonConnectUI.sendTransaction({
                    messages: [
                        {
                            address: args.to.toString(),
                            amount: args.value.toString(),
                            payload: args.body?.toBoc().toString('base64'),
                            stateInit: stateInitCell
                                ? stateInitCell.toBoc().toString('base64')
                                : undefined
                        },
                    ],
                    validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
                });
            },
            address: wallet?.account?.address ? Address.parse(wallet?.account?.address as string) : undefined
        },
        connected: !!wallet?.account.address,
        wallet: wallet?.account.address ?? null,
        network: wallet?.account.chain ?? null
    };
}