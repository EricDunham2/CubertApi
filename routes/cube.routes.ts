import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'
import { CubeController } from "../controllers/cube.controller";
import { InterpolationMode } from "chroma-js";

export class CubeRoutes extends CommonRoutesConfig {
    cube: CubeController

    constructor(app: express.Application) {
        super(app, 'CubeRoutes')
        
        this.cube = new CubeController();
    }

    configureRoutes() {
        this.app.route('/cube')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of cube options');
            })
            .post((req: express.Request, res:express.Response) => {

                console.log(this.cube.cube(req.query.colors as Array<string>, req.query.mode as InterpolationMode));
                res.status(200).send('Post to cube');
            });

        //CRUD for cube
        this.app.route('/cube/:cubeId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                //Get cube with id

                res.status(200).send(`GET request for id ${req.params.cubeId}`);
            })
            .post((req: express.Request, res: express.Response) => {
                //Create new cube with id

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                //Updating cube with id

                res.status(200).send(`PATCH request for id ${req.params.cubeId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                //Remove cube with id

                res.status(200).send(`DELETE request for id ${req.params.cubeId}`);
            });

        this.app.route('/cube/apply')
            .post((req: express.Request, res: express.Response) => {
                //Apply the current cube color

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            });

        this.app.route('/cube/power')
            .post((req: express.Request, res: express.Response) => {
                //Power on/off the cube

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            });

        this.app.route('/cube/settings')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                //Get the cube settings

                res.status(200).send(`GET request for id ${req.params.cubeId}`);
            })
            .post((req: express.Request, res: express.Response) => {
                //Update the cube settings

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            });

        return this.app;
    }
}
