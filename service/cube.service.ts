import { CubeDto } from "../dto/cube.dto";
import { MongoClientService } from "./mongo.client.service";
import { FindCursor, Document } from 'mongodb';

export class CubeService {
    database: MongoClientService;

    constructor() {
        this.database = MongoClientService.getInstance();
    }

    createCube(cube: CubeDto) {
        let res;
        //Array<number> | Array<Array<number>> | MappedText
        this.database.connect("cubert", "cubes").then(col => {
            res = col.insertOne(cube);
        });

        return res
    }

    deleteCube(cubeId: number) {
        this.database.connect("cubert", "cubes").then(col => {
            col.deleteOne({ id: cubeId })
        }).catch(e => {
            console.error(e);
        });
    }

    updateCube(cube: CubeDto) {
        let res;
        //Array<number> | Array<Array<number>> | MappedText
        this.database.connect("cubert", "cubes").then(col => {
            res = col.updateOne(
                { id: cube.id },
                { $set: cube }
            );
        });

        return res
    }

    getCube(cubeId: number): (FindCursor<Document> | null) {
        let result = null;

        this.database.connect("cubert", "cubes").then(col => {
            result = col.find({ id: cubeId });
        });

        return result
    }

    getAllCubes():(FindCursor<Document> | null) {
        let results = null;

        this.database.connect("cubert", "cubes").then(col => {
            results = col.find({}).toArray()
        });

        return results;
    }
}


/*
|-----------------------------------------------|
|   ID  |   Name    |   Buffer  |   UserId  |   |
|-----------------------------------------------|
|   Int |   String  |   Array   |   FK      |   |
|-----------------------------------------------|
*/