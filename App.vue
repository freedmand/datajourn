
<template>
  <div>
    <Sidebar :routes="routes" />
    <Content v-if="currentRoute != null" :route="currentRoute">
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
  --accent: #e60022;
  --light-border: 1px solid rgba(0, 0, 0, 0.15);
  --hover-opacity: 0.8;

  --sidebar-width: 300px;
  --sidebar-padding: 13.5px;
}

@media print {
  .noprint {
    display: none !important;
  }
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
  routes: [...routerSpec, { path: "*", redirect: "/404" }]
});

export default {
  components: { Sidebar, Content },
  router,
  data() {
    return { routes: nestedRoutes };
  },
  mounted() {
    document.body.addEventListener("keydown", this.handleKeypress);
  },
  destroyed() {
    document.body.removeEventListener("keydown", this.handleKeypress);
  },
  computed: {
    currentRoute() {
      const name = this.$route.name;
      if (name == null) return null;

      for (let i = 0; i < this.routes.length; i++) {
        if (this.routes[i].name == name) {
          return this.routes[i];
        }
      }
      return null;
    }
  },
  methods: {
    handleKeypress(e) {
      if (e.shiftKey) {
        if (e.key == "ArrowLeft") {
          this.previous();
        } else if (e.key == "ArrowRight") {
          this.next();
        }
      }
    },
    previous() {
      if (this.currentRoute == null) return;
      if (this.currentRoute.previous != null) {
        this.$router.push({ name: this.currentRoute.previous.name });
      }
    },
    next() {
      if (this.currentRoute == null) return;
      if (this.currentRoute.next != null) {
        this.$router.push({ name: this.currentRoute.next.name });
      }
    }
  },
  store
};
</script>
