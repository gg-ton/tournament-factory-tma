import { MongoClient } from "mongodb";
import {useTournamentContract} from "@/app/hooks/useTournamentContract";

const uri: string = process.env.MONGODB_URI as string;
const options: object = {};

export class MongoBuilder {
    private instance: MongoBuilder | undefined;
    private client: MongoClient;
    private clientPromise: Promise<MongoClient>;

    constructor() {
        this.client = new MongoClient(uri, options);
        this.clientPromise = this.client.connect();
    }

    getInstance() {
        if (!this.instance) {
            this.instance = new MongoBuilder();
        }
        return this.instance.clientPromise;
    }
}