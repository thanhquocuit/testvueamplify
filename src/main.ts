import { createApp } from "vue";
import { createPinia } from "pinia";
import { Amplify } from "aws-amplify";

import App from "./App.vue";
import router from "./router";

import awsExports from "./aws-exports";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

const app = createApp(App);

Amplify.configure(awsExports);

app.use(createPinia());
app.use(router);

app.mount("#app");
