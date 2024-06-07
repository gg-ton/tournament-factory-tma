import { cache } from 'react'
import client, {ObjectId} from 'mongodb';
import {MongoBuilder} from "@/app/db";

const collectionName: string = "tournament";

/*
get tournament list (with owner)
get tournament details (with owner)
create new tournament (should be called on contract deployment success)
 */

export interface Participant {
    name: string;
    address: string;
}

export interface Tournament {
    address: string;
    name: string;
}

export const getTournament = cache(async (address: string): Promise<Tournament> => {
    const builder = new MongoBuilder();
    const mongoPromise = builder.getInstance();

    const client = await mongoPromise;

    const tournaments = await client
        .db()
        .collection(collectionName)
        .find({
            address: address,
        })
        .limit(1)
        .toArray();

    tournaments.forEach(tournament => {
        console.log("tournament", tournament);
    })

    if (!tournaments.length) {
        return Promise.reject("Tournament not found.");
    }

    const contractAddr = tournaments[0].address;
    const result: Tournament = {
        name: tournaments[0].name,
        address: contractAddr,
    };

    return Promise.resolve(result)
})

export const addTournament = async (tournament: Tournament) => {
    const builder = new MongoBuilder();
    const mongoPromise = builder.getInstance();

    const client = await mongoPromise;

    await client
        .db()
        .collection(collectionName)
        .insertOne({
            "name": tournament.name,
            "address": tournament.address,
        });
};