"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
class UserController {
    constructor() {
        this.userSvc = new user_service_1.UserService();
    }
    createUser(email, password) {
        let id = this.userSvc.createUser();
        return id;
    }
    deleteUser(userId) {
        let deleted = this.userSvc.deleteUser(userId);
        return deleted;
    }
    updateUser(userId) {
        let updated = this.userSvc.updateUser(userId);
        return updated;
    }
    getUser(userId) {
        //Force into type userdto
        let user = this.userSvc.getUser(userId);
        return user;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBEQUFzRDtBQUV0RCxNQUFhLGNBQWM7SUFHdkI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3RDLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFM0MsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWM7UUFDckIsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjO1FBQ3JCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNsQix5QkFBeUI7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBL0JELHdDQStCQyJ9