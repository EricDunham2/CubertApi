import { MongoClientService } from "./mongo.client.service";

export class UserService {
    database: MongoClientService;

    constructor() {
        this.database = new MongoClientService(); 
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

    deleteUser(userId: number) {
        this.database.connect("cubert", "user")
        .then(collection => {
            //Delete cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });

        //TODO change this to return whether user was deleted
        return false;
    }

    updateUser(userId: number) {
        this.database.connect("cubert", "user")
        .then(collection => {
            //Update cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });

        //TODO change this to return whether user was updated
        return false
    }

    getUser(userId: number) {
        this.database.connect("cubert", "user")
        .then(collection => {
            //Update cube from database with id confirming cube belongs to user
        }).catch(e => {
            console.error(e);
        });

        //TODO change this to return whether user was updated
        return false
    }
}