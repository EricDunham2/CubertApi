import { MongoClient } from "mongodb";

export class MongoClientService {
    client: MongoClient;

    constructor(port: number) {
        const url: string = `mongodb://localhost:${port}`;
        this.client = new MongoClient(url);
    }

    async connect(dbName: string, coll: string) {

        await this.client.connect();

        console.log('Connected successfully to server');

        const db = this.client.db(dbName);
        const collection = db.collection(coll);

        return collection;
    }
}
