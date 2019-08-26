<template>
  <router-link :to="route.path" @click.native="clearSearch()">
    <div class="arrow">
      <img v-if="direction == 'left'" src="./assets/left_arrow.svg" />
      <img v-if="direction == 'right'" src="./assets/right_arrow.svg" />
    </div>
  </router-link>
</template>

<style scoped>
.arrow {
  display: inline-block;
}
</style>

<script>
export default {
  props: {
    direction: String,
    route: Object
  },
  methods: {
    clearSearch() {
      this.$store.commit("clearSearch");
    }
  }
};
</script>