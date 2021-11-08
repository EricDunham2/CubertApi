"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mongo_client_service_1 = require("./mongo.client.service");
class UserService {
    constructor() {
        this.database = new mongo_client_service_1.MongoClientService();
    }
    createUser() {
        this.database.connect("cubert", "users")
            .then(collection => {
            //Insert cube into database with name and values
        }).catch(e => {
            console.error(e);
        });
        //TODO change this to return user id
        return 0;
    }
    deleteUser(userId) {
        this.database.connect("cubert", "user")
            .then(collection => {
            //Delete cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });
        //TODO change this to return whether user was deleted
        return false;
    }
    updateUser(userId) {
        this.database.connect("cubert", "user")
            .then(collection => {
            //Update cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });
        //TODO change this to return whether user was updated
        return false;
    }
    getUser(userId) {
        this.database.connect("cubert", "user")
            .then(collection => {
            //Update cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });
        //TODO change this to return whether user was updated
        return false;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZS91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUVBQTREO0FBRTVELE1BQWEsV0FBVztJQUdwQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5Q0FBa0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixnREFBZ0Q7UUFDcEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILG9DQUFvQztRQUNwQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLG1FQUFtRTtRQUN2RSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgscURBQXFEO1FBQ3JELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLG1FQUFtRTtRQUN2RSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgscURBQXFEO1FBQ3JELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLG1FQUFtRTtRQUN2RSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgscURBQXFEO1FBQ3JELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7Q0FDSjtBQXRERCxrQ0FzREMifQ==