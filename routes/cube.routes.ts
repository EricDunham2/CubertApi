import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'
import { CubeController } from "../controllers/cube.controller";
import { InterpolationMode } from "chroma-js";
import debug from 'debug';
import { CubeDto } from "../dto/cube.dto";

export class CubeRoutes extends CommonRoutesConfig {
    cube: CubeController
    debugLog: debug.IDebugger;

    constructor(app: express.Application) {
        super(app, 'CubeRoutes')

        this.cube = new CubeController();
        this.debugLog = debug('cube-routes');
    }

    configureRoutes() {
        this.app.route('/cube')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of cube options');
            })
            .post((req: express.Request, res: express.Response) => {

                res.status(200).send('Post to cube');
            });

        this.app.route('/cube/cubes')
            .get((req: express.Request, res: express.Response) => {
                this.cube.getAllCubes();
            });

        //CRUD for cube
        this.app.route('/cube/:cubeId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                this.debugLog(`Getting cube with id ${req.params.cubeId}`);
                let cubeId: number = parseInt(req.params.cubeId as string)

                //this.cube.getCube(cubeId);
                res.status(200).send(`GET request for id ${req.params.cubeId}`);
            })
            .post((req: express.Request, res: express.Response) => {
                this.debugLog(`Creating cube`);

                let cube: CubeDto = req.body as CubeDto;
                this.cube.createCube(cube);

                //this.cube.createCube(cubeId);
                res.status(200).send(`POST request for id ${req.params.cubeId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                this.debugLog(`Getting cube with id ${req.params.cubeId}`);

                let cube: CubeDto = req.body as CubeDto;
                cube.id = parseInt(req.params.cubeId);

                this.cube.updateCube(cube);
                res.status(200).send(`PATCH request for id ${req.params.cubeId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                let cubeId: number = parseInt(req.params.cubeId as string)

                this.cube.deleteCube(cubeId);
                res.status(200).send(`DELETE request for id ${req.params.cubeId}`);
            });

        this.app.route('/cube/transition')
            .post((req: express.Request, res: express.Response) => {
                let top: Array<string> = req.body.top;
                let bottom: Array<string> = req.body.bottom;
                let mode: InterpolationMode = req.body.mode;
                let interval: number = req.body.interval;
                let steps: number = req.body.steps;
                let loop: boolean = req.body.loop;

                let resp = this.cube.transition(top, bottom, mode, interval, steps, loop);
                res.status(200).send(resp);
            });

        this.app.route('/cube/conway')
            .post((req: express.Request, res: express.Response) => {
                let size: number = req.body.number;
                let foreground: number = req.body.foreground;
                let background: number = req.body.background;

                let resp = this.cube.conway(size, foreground, background);
                res.status(200).send(resp);
            });

        this.app.route('/cube/text')
            .post((req: express.Request, res: express.Response) => {
                let message: string = req.body.message;
                let background: number = req.body.interval;
                let foreground: number = req.body.steps;

                let resp = this.cube.text(message, background, foreground);
                res.status(200).send(resp);
            });

        this.app.route('/cube/cube')
            .post((req: express.Request, res: express.Response) => {
                let colors: Array<string> = req.body.colors;
                let mode: InterpolationMode = req.body.mode;

                let resp = this.cube.drawCube(colors, mode);
                res.status(200).send(resp);
            });

        this.app.route('/cube/power')
            .post((req: express.Request, res: express.Response) => {
                this.cube.power();
            });

        return this.app;
    }
}
