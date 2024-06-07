import { cache } from 'react'
import client, {ObjectId} from 'mongodb';
import {MongoBuilder} from "@/app/db";

const collectionName: string = "tournament";

/*
get tournament list (with owner)
get tournament details (with owner)
create new tournament (should be called on contract deployment success)
 */

export const getTournament = cache(async (id: string) => {
    const builder = new MongoBuilder();
    const mongoPromise = builder.getInstance();

    const client = await mongoPromise;

    const tournaments = await client
        .db()
        .collection(collectionName)
        .find({
            _id: new ObjectId(id),
        })
        .toArray();

    tournaments.forEach(tournament => {
        console.log("tournament", tournament);
    })
})

export const setTournament = cache(async (name: string, gameName: string, prizePool: bigint) => {
    const builder = new MongoBuilder();
    const mongoPromise = builder.getInstance();

    const client = await mongoPromise;

    await client
        .db()
        .collection(collectionName)
        .insertOne({
            "name": name,
            "gameName": gameName,
            "prizePool": prizePool,
        });
})