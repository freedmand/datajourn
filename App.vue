
<template>
  <div>
    <Sidebar :routes="routes" />
    <Content>
      <router-view></router-view>
    </Content>
  </div>
</template>

<style>
body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
}

* {
  --accent: #e71d3e;
  --light-border: 1px solid rgba(0, 0, 0, 0.15);
  --hover-opacity: 0.8;

  --sidebar-width: 300px;
  --sidebar-padding: 13.5px;
}
</style>

<script>
import Sidebar from "./Sidebar";
import Content from "./Content";

import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

import routes from "./routes.js";
import computeRoutes from "./compute_routes.js";

const { nestedRoutes, routerSpec } = computeRoutes(routes);

const router = new Router({
  mode: "history",
  routes: routerSpec
});

export default {
  components: { Sidebar, Content },
  router,
  data() {
    return { routes: nestedRoutes };
  },
  store
};
</script>
