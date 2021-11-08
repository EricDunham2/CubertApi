import { CommonRoutesConfig } from "../common/common.routes.config";
import { SettingsController } from "../controllers/settings.controller";
import express from 'express'

export class SettingsRoutes extends CommonRoutesConfig {
    settings: SettingsController

    constructor(app: express.Application) {
        super(app, 'SettingsRoutes')

        this.settings = new SettingsController();
    }

    configureRoutes() {
        this.app.route('/settings')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('Gettings Settings');
            })
            .post((req: express.Request, res:express.Response) => {
                res.status(200).send('Post to cube');
            });

        return this.app;
    }
}
