import DefaultTheme from "vitepress/theme";
import "./index.scss";

import AutoGithubLink from "../components/AutoGithubLink.vue";
import JoinWeiChatGroup from "../components/JoinWeiChatGroup.vue";
import WasmExample from "../components/WasmExample.vue";
import WasmFullScreen from "../components/WasmFullScreen.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("AutoGithubLink", AutoGithubLink);
    app.component("JoinWeiChatGroup", JoinWeiChatGroup);
    app.component("WasmExample", WasmExample);
    app.component("WasmFullScreen", WasmFullScreen);
  },
};
