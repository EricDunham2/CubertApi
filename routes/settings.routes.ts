import { CommonRoutesConfig } from "../common/common.routes.config";
import { SettingsController } from "../controllers/settings.controller";
import express from 'express'
import { MatrixOptions, RuntimeOptions } from "rpi-led-matrix";

export class SettingsRoutes extends CommonRoutesConfig {
    settings: SettingsController

    constructor(app: express.Application) {
        super(app, 'SettingsRoutes')

        this.settings = new SettingsController();
    }

    configureRoutes() {
        this.app.route('/settings/matrix')
            .get((req: express.Request, res: express.Response) => {
                this.settings.getMatrixOptions()

                res.status(200).send('Getting matrix settings');
            })
            .post((req: express.Request, res: express.Response) => {
                const matrixSettings: MatrixOptions = req.body as MatrixOptions;
                this.settings.setMatrixSettings(matrixSettings);

                res.status(200).send('Setting matrix settings');
            });

        this.app.route('/settings/runtime')
            .get((req: express.Request, res: express.Response) => {
                this.settings.getRuntimeOptions();

                res.status(200).send('Getting runtime settings');
            })
            .post((req: express.Request, res: express.Response) => {
                const runtimeSettings: RuntimeOptions = req.body as RuntimeOptions;
                this.settings.setRuntimeOptions(runtimeSettings);

                res.status(200).send('Setting runtime settings');
            });

        this.app.route('/settings/application')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('Getting matrix settings');
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Setting application settings');
            });

        return this.app;
    }
}
