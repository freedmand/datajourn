<template>
  <div>
    <div class="outer" :class="{completed}">
      <div class="inner" :style="{width: `${completed ? 100 : normProgress}%`}"></div>
    </div>
    <p v-if="hasMessage">{{message}}</p>
  </div>
</template>

<style scoped>
.small {
  display: inline-block;
  width: 300px;
  vertical-align: middle;
}

.outer {
  width: 100%;
  height: 27px;
  background: #fffafb;
  border-radius: 6px;
  position: relative;
  border: solid 1px var(--accent);
  box-sizing: border-box;
}

.small .outer {
  height: 20px;
}

.inner {
  background: linear-gradient(red, var(--accent));
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: width 0.2s linear;
  border: none;
  opacity: 0.8;
  border-radius: 3px;
  box-shadow: 0 1px 5px #0000007a;
}

.outer.completed .inner {
  transition: width 0s;
}

p {
  font-size: 12px !important;
  padding: 0 10px;
  font-weight: bold;
}
</style>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
    message: { type: String, default: "" }
  },
  data() {
    return {
      normProgress: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.normProgress = this.n;
    }, 150);
  },
  computed: {
    hasMessage() {
      return this.message.trim().length > 0;
    },
    n() {
      if (this.progress < 0) return 0;
      if (this.progress > 1) return 100;
      return this.progress * 100;
    },
    completed() {
      return this.n == 100;
    }
  }
};
</script>