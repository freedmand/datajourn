<template>
  <div class="link">
    <router-link
      :to="route.path"
      :class="{nested: route.type == 'nested'}"
      @click.native="clearSearch()"
    >{{route.name}}</router-link>
  </div>
</template>

<style scoped>
.link {
  text-align: left;
  cursor: pointer;
}

.link:hover {
  background: rgba(0, 0, 0, 0.03);
  border-radius: 15px;
}

.link > a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  display: block;
  padding: 0.5em var(--sidebar-padding) 0.5em var(--sidebar-padding);
}

a.nested {
  padding-left: calc(var(--sidebar-padding) + 1em);
}

a.router-link-exact-active {
  color: var(--accent);
}
</style>

<script>
export default {
  props: {
    route: Object
  },
  methods: {
    clearSearch() {
      this.$store.commit("clearSearch");
    }
  }
};
</script>