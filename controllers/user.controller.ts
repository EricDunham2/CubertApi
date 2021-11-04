import { UserService } from '../service/user.service';

export class UserController {
    userSvc: UserService;

    constructor() {
        this.userSvc = new UserService();
    }

    createUser(email: string, password: string) {
        let id: number = this.userSvc.createUser();

        return id;
    }

    deleteUser(userId: number) {
        let deleted: boolean = this.userSvc.deleteUser(userId);

        return deleted;
    }

    updateUser(userId: number) {
        let updated: boolean = this.userSvc.updateUser(userId);

        return updated;
    }

    getUser(userId: number) {
        //Force into type userdto
        let user = this.userSvc.getUser(userId);

        return user;
    }
}
