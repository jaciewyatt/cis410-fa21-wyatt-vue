import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import WebinarDetails from "./components/WebinarDetails.vue";
import Webinars from "./components/Webinars.vue";
import NotFound from "./components/NotFound.vue";
import RegisterWebinar from "./components/RegisterWebinar.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/login", component: Login },
    { path: "/webinars", component: Webinars },
    {
      path: "/webinars/:pk",
      component: WebinarDetails,
      children: [{ path: "register", component: RegisterWebinar }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
