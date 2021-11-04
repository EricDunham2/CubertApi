"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const cube_controller_1 = require("../controllers/cube.controller");
class CubeRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CubeRoutes');
        this.cube = new cube_controller_1.CubeController();
    }
    configureRoutes() {
        this.app.route('/cube')
            .get((req, res) => {
            res.status(200).send('List of cube options');
        })
            .post((req, res) => {
            console.log(this.cube.cube(req.query.colors, req.query.mode));
            res.status(200).send('Post to cube');
        });
        this.app.route('/cube/:cubeId')
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(`GET request for id ${req.params.cubeId}`);
        })
            .post((req, res) => {
            res.status(200).send(`POST request for id ${req.params.cubeId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH request for id ${req.params.cubeId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE request for id ${req.params.cubeId}`);
        });
        return this.app;
    }
}
exports.CubeRoutes = CubeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ViZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvY3ViZS5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQW9FO0FBRXBFLG9FQUFnRTtBQUdoRSxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFHOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxnQ0FBYyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDbEIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQW9CLEVBQUUsRUFBRTtZQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBdUIsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQXlCLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzFCLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQixFQUFFLEVBQUU7WUFDN0UsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXZDRCxnQ0F1Q0MifQ==