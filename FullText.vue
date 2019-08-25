<template>
  <div ref="fulltext">
    <PageText v-for="(route, i) in routes" :key="i" :ref="`pagetext${i}`" :route="route" />
  </div>
</template>

<script>
import PageText from "./PageText";

export default {
  components: { PageText },
  props: {
    routes: Array
  },
  mounted() {
    const results = [];

    for (let i = 0; i < this.routes.length; i++) {
      results.push(this.$refs[`pagetext${i}`][0].getText());
    }
    window.console.log(results);
    this.$emit("fulltext", results);
  }
};
</script>