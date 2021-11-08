"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClientService = void 0;
const mongodb_1 = require("mongodb");
class MongoClientService {
    constructor() {
        const url = `mongodb://localhost:27017`;
        this.client = new mongodb_1.MongoClient(url);
    }
    static getInstance() {
        if (!MongoClientService.instance) {
            MongoClientService.instance = new MongoClientService();
        }
        return MongoClientService.instance;
    }
    connect(dbName, coll) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            console.log('Connected successfully to server');
            const db = this.client.db(dbName);
            const collection = db.collection(coll);
            return collection;
        });
    }
}
exports.MongoClientService = MongoClientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlL21vbmdvLmNsaWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFzQztBQUV0QyxNQUFhLGtCQUFrQjtJQUkzQjtRQUNJLE1BQU0sR0FBRyxHQUFXLDJCQUEyQixDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzlCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7UUFFRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUssT0FBTyxDQUFDLE1BQWMsRUFBRSxJQUFZOztZQUV0QyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBRWhELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkMsT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBQ0o7QUE1QkQsZ0RBNEJDIn0=