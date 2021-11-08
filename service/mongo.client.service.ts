import { MongoClient } from "mongodb";

export class MongoClientService {
    private client: MongoClient;
    private static instance: MongoClientService;

    constructor() {
        const url: string = `mongodb://localhost:27017`;
        this.client = new MongoClient(url);
    }

    public static getInstance(): MongoClientService {
        if (!MongoClientService.instance) {
            MongoClientService.instance = new MongoClientService();
        }

        return MongoClientService.instance;
    }

    async connect(dbName: string, coll: string) {

        await this.client.connect();

        console.log('Connected successfully to server');

        const db = this.client.db(dbName);
        const collection = db.collection(coll);

        return collection;
    }
}
