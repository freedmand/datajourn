<template>
  <div ref="pagetext">
    <component :is="route.component"></component>
  </div>
</template>

<script>
export default {
  props: {
    route: Object
  },
  methods: {
    getText() {
      const text = this.$refs.pagetext.innerText;

      return {
        route: this.route,
        text: text,
        normalized: text.toLowerCase()
      };
    }
  }
};
</script>