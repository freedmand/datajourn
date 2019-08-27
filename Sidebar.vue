<template>
  <div class="noprint">
    <div v-if="expanded" class="shim" @click="toggle()"></div>
    <div class="hamburger" :class="{expanded}" @click="toggle()">
      <img alt src="./assets/hamburger.svg" />
    </div>
    <div class="sidebar" :class="{expanded}">
      <div class="sidebar-container">
        <div class="hamburger-static" :class="{expanded}" @click="toggle()">
          <img alt src="./assets/hamburger.svg" />
        </div>
        <div class="search">
          <Search :routes="routes" />
        </div>

        <router-link to="/" @click.native="clearSearch()">
          <h1>Data Journalism</h1>
        </router-link>

        <div class="sidebar-links">
          <SidebarLink v-for="(route, i) in sidebarRoutes" :key="i" :route="route" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 0;
  top: 0;
  border-right: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  background: #f9f9f9;
  z-index: 3;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.2s ease;
}

.shim {
  display: none;
  position: fixed;
  left: var(--sidebar-width);
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(#ffffffab, #ffffffd9);
  z-index: 5;
  cursor: pointer;
}

.sidebar.expanded {
  width: var(--sidebar-width);
  border-right: var(--light-border);
}

.sidebar-container {
  width: var(--sidebar-width);
}

.hamburger {
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 4;
  background: none;
  right: 0;
  text-align: left;
  transition: all 0.2s ease;
  pointer-events: none;
  height: 45px;
}

.hamburger-static {
  position: relative;
  text-align: left;
  visibility: hidden;
  cursor: pointer;
  pointer-events: none;
  height: 45px;
}

.hamburger.expanded {
  left: var(--sidebar-width);
}

.hamburger > img,
.hamburger-static > img {
  padding-top: 14px;
  padding-left: 22px;
  padding-bottom: 14px;
  pointer-events: all;
}

.hamburger > img:hover,
.hamburger-static > img:hover {
  opacity: var(--hover-opacity);
}

.search {
  margin-top: -45px;
}

img {
  user-select: none;
}

a {
  color: inherit;
  text-decoration: inherit;
}

h1 {
  font-weight: 600;
  font-size: 27px;
  color: var(--accent);
  text-align: left;
  padding-left: var(--sidebar-padding);
  margin-top: 22px;
  margin-bottom: 0;
}

.sidebar-links {
  margin: 28px 0;
}

@media screen and (max-width: 1012px) {
  .hamburger {
    background: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.8)
    );
  }

  .hamburger.expanded {
    background: none;
  }
}

@media screen and (max-width: 1315px) {
  .hamburger.expanded {
    background: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.8)
    );
  }
}

@media screen and (max-width: 600px) {
  .hamburger.expanded {
    display: none;
  }

  .hamburger-static {
    visibility: visible;
  }

  .search {
    display: none;
  }

  .shim {
    display: block;
  }
}
</style>

<script>
import Search from "./Search";
import SidebarLink from "./SidebarLink";

export default {
  components: { Search, SidebarLink },
  props: {
    routes: Array
  },
  methods: {
    clearSearch() {
      this.$store.commit("clearSearch");
      if (document.body.offsetWidth <= 600) {
        this.expanded = false;
      }
    },
    toggle() {
      this.expanded = !this.expanded;
    }
  },
  computed: {
    expanded: {
      get() {
        return this.$store.state.sidebarExpanded;
      },
      set(value) {
        this.$store.commit("setExpanded", value);
      }
    },
    sidebarRoutes() {
      return this.routes.filter(
        route => route.hidden == null || route.hidden == false
      );
    }
  }
};
</script>