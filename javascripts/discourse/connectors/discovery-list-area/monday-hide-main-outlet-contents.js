import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";

export default class MondayHideMainOutletContents extends Component {
  @service router;

  get mustHide() {
    return this.router.currentRouteName === `discovery.${defaultHomepage()}`;
  }
}
