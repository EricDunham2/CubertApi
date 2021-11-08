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

                res.status(200).send('Post to cube');
            });

        //CRUD for cube
        this.app.route('/cube/:cubeId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                let cubeId: number = parseInt(req.params.cubeId as string)

                //this.cube.getCube(cubeId);
                res.status(200).send(`GET request for id ${req.params.cubeId}`);
            })
            .post((req: express.Request, res: express.Response) => {

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                //Updating cube with id

                res.status(200).send(`PATCH request for id ${req.params.cubeId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                let cubeId: number = parseInt(req.params.cubeId as string)

                //this.cube.deleteCube(cubeId);
                res.status(200).send(`DELETE request for id ${req.params.cubeId}`);
            });

        this.app.route('/cube/transition')
            .post((req: express.Request, res: express.Response) => {
                let top: Array<string> = req.query.top as Array<string>;
                let bottom: Array<string> = req.query.bottom as Array<string>;
                let mode: InterpolationMode = req.query.mode as InterpolationMode;
                let interval: number = parseInt(req.query.interval as string);
                let steps: number =  parseInt(req.query.steps as string);
                let loop: boolean = Boolean(req.query.loop);

                let resp = this.cube.transition(top, bottom, mode, interval, steps, loop);
                res.status(200).send(resp);
            });

        this.app.route('/cube/text')
            .post((req: express.Request, res: express.Response) => {
                let message: string = req.query.message as string;
                let background: number = parseInt(req.query.interval as string);
                let foreground: number =  parseInt(req.query.steps as string);

                let resp = this.cube.text(message, background, foreground);
                res.status(200).send(resp);
            });

        this.app.route('/cube/cube')
            .post((req: express.Request, res: express.Response) => {
                let colors: Array<string> = req.query.colors as Array<string>;
                let mode: InterpolationMode = req.query.mode as InterpolationMode;

                let resp = this.cube.drawCube(colors, mode);
                res.status(200).send(resp);
            });

        this.app.route('/cube/power')
            .post((req: express.Request, res: express.Response) => {
                this.cube.power();

                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            });

        return this.app;
    }
}
