"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const settings_controller_1 = require("../controllers/settings.controller");
class SettingsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'SettingsRoutes');
        this.settings = new settings_controller_1.SettingsController();
    }
    configureRoutes() {
        this.app.route('/settings')
            .get((req, res) => {
            res.status(200).send('Gettings Settings');
        })
            .post((req, res) => {
            res.status(200).send('Post to cube');
        });
        return this.app;
    }
}
exports.SettingsRoutes = SettingsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Mucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL3NldHRpbmdzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5RUFBb0U7QUFDcEUsNEVBQXdFO0FBR3hFLE1BQWEsY0FBZSxTQUFRLHlDQUFrQjtJQUdsRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksd0NBQWtCLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN0QixHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXBCRCx3Q0FvQkMifQ==