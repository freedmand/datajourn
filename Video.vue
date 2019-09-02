<template>
  <div>
    <video controls muted :src="src" :poster="poster"></video>
  </div>
</template>

<style scoped>
video {
  border: solid 1px gainsboro;
  width: 500px;
}
</style>

<script>
export default {
  props: {
    src: String
  },
  computed: {
    poster() {
      return this.src.replace(/\.mp4$/, ".jpg");
    }
  }
};
</script>