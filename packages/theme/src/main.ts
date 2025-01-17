import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "./router";

import "./styles/main.sass";
//import axios from "axios";

//axios.defaults.baseURL = "https://drapi.up.railway.app/"

const app = createApp(App);
const store = createPinia();
const head = createHead();

app.use(router);
app.use(store);
app.use(head);

app.mount("body");
