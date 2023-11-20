import Component from '@glimmer/component';
import { withPluginApi } from "discourse/lib/plugin-api"
import { tracked } from '@glimmer/tracking';
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";

export default class MondayHideMainOutletContents extends Component {
    @service router;

    @tracked mustHide = true;

    constructor() {
        super(...arguments);
        this.mustHide = (this.router.currentRouteName === `discovery.${defaultHomepage()}`);

        withPluginApi("0.3.0", (api) => {
            api.onPageChange((url, title) => {
                this.mustHide = (this.router.currentRouteName === `discovery.${defaultHomepage()}`);
            });
        });
    }
}