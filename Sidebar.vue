<template>
  <div>
    <div class="hamburger" @click="toggle()">
      <img src="./assets/hamburger.svg" />
    </div>
    <div class="sidebar" :class="{expanded}">
      <div class="sidebar-container">
        <Search :routes="routes" />

        <router-link to="/" @click.native="clearSearch()">
          <h1>Data Journalism</h1>
        </router-link>

        <div class="sidebar-links">
          <SidebarLink v-for="(route, i) in routes" :key="i" :route="route" />
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
  border-right: var(--light-border);
  box-sizing: border-box;
  background: #f9f9f9;
  z-index: 3;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.2s ease;
}

.sidebar.expanded {
  width: var(--sidebar-width);
}

.sidebar-container {
  width: var(--sidebar-width);
}

.hamburger {
  position: absolute;
  top: 14px;
  left: calc(var(--sidebar-width) + 22px);
  cursor: pointer;
  z-index: 3;
}

.hamburger:hover {
  opacity: var(--hover-opacity);
}

img {
  user-select: none;
}

@media screen and (max-width: 850px) {
  .sidebar {
    display: none;
  }
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
  margin-top: 42px;
  margin-bottom: 0;
}

.sidebar-links {
  margin: 28px 0;
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
  data() {
    return {
      expanded: true
    };
  },
  methods: {
    clearSearch() {
      this.$store.commit("clearSearch");
    },
    toggle() {
      this.expanded = !this.expanded;
    }
  }
};
</script>