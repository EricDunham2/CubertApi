"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeService = void 0;
const mongo_client_service_1 = require("./mongo.client.service");
class CubeService {
    constructor() {
        this.database = mongo_client_service_1.MongoClientService.getInstance();
    }
    createCube(cube) {
        let res;
        //Array<number> | Array<Array<number>> | MappedText
        this.database.connect("cubert", "cubes").then(col => {
            res = col.insertOne(cube);
        });
        return res;
    }
    deleteCube(cubeId) {
        this.database.connect("cubert", "cubes").then(col => {
            col.deleteOne({ id: cubeId });
        }).catch(e => {
            console.error(e);
        });
    }
    updateCube(cube) {
        let res;
        //Array<number> | Array<Array<number>> | MappedText
        this.database.connect("cubert", "cubes").then(col => {
            res = col.updateOne({ id: cube.id }, { $set: cube });
        });
        return res;
    }
    getCube(cubeId) {
        let result = null;
        this.database.connect("cubert", "cubes").then(col => {
            result = col.find({ id: cubeId });
        });
        return result;
    }
    getAllCubes() {
        let results = null;
        this.database.connect("cubert", "cubes").then(col => {
            results = col.find({}).toArray();
        });
        return results;
    }
}
exports.CubeService = CubeService;
/*
|-----------------------------------------------|
|   ID  |   Name    |   Buffer  |   UserId  |   |
|-----------------------------------------------|
|   Int |   String  |   Array   |   FK      |   |
|-----------------------------------------------|
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ViZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZS9jdWJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUVBQTREO0FBRzVELE1BQWEsV0FBVztJQUdwQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcseUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFhO1FBQ3BCLElBQUksR0FBRyxDQUFDO1FBQ1IsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFhO1FBQ3BCLElBQUksR0FBRyxDQUFDO1FBQ1IsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQ2YsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUNmLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUNqQixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQTtJQUNkLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoRCxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoRCxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQXpERCxrQ0F5REM7QUFHRDs7Ozs7O0VBTUUifQ==