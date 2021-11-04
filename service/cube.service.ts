import { MongoClientService } from "./mongo.client.service";

export class CubeService {
    database: MongoClientService;

    constructor() {
        this.database = new MongoClientService(3000); 
    }

    createCube() {
        this.database.connect("cubert", "cubes")
        .then(collection => {
            //Insert cube into database with name and values
        }).catch(e => {
            console.error(e);
        });
    }

    deleteCube(id: number, userId: number) {
        this.database.connect("cubert", "cubes")
        .then(collection => {
            //Delete cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });
    }

    updateCube(id: number, userId: number) {
        this.database.connect("cubert", "cubes")
        .then(collection => {
            //Update cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });
    }

    getCube() {

    }
}


/*
|-----------------------------------------------|
|   ID  |   Name    |   Buffer  |   UserId  |   |
|-----------------------------------------------|
|   Int |   String  |   Array   |   FK      |   |
|-----------------------------------------------|
*/