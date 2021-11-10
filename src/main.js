import { createApp } from "vue";
import App from "./App.vue";
import * as icons from "./index.js";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);
const iconNames = [];
for (const name in icons) {
  app.component(name, icons[name]);
  iconNames.push(name);
}
app.config.globalProperties.$ICON_NAMES = iconNames;
app
  .use(Toaster, {
    position: "top",
    duration: 2000,
    max: 1,
  })
  .mount("#app");
