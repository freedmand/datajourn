<template>
  <div>
    <div class="google">
      <button
        :class="{invisible: started}"
        ref="playButton"
        @click="play()"
      >Play sample Google search</button>
      <input ref="text" :class="{invisible: !started}" v-model="text" @keydown.enter="search()" />
      <img src="./assets/google.svg" alt />
    </div>
    <div class="actions" :class="{hidden: !isDone}">
      <button class="action" @click="search()">Search</button>
      <button class="action" @click="reset()">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.google {
  height: 40px;
  width: 100%;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  max-width: 638px;
  position: relative;
}

.hidden {
  visibility: hidden !important;
}

.invisible {
  display: none !important;
}

input {
  display: inline-block;
  padding-left: 45px;
  line-height: 40px !important;
  border: none;
  outline: none;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background: none;
  box-sizing: border-box;
  border-radius: 24px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
}

.google > button {
  display: inline-block;
  margin-left: 50px;
  height: 30px;
  margin-top: 5px;
  background: #4185f4;
  color: white;
  font-family: inherit;
  font-size: 14px !important;
  line-height: 30px !important;
  font-weight: bold;
  vertical-align: middle;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  cursor: pointer;
  outline: none;
}

button:hover {
  opacity: 0.8;
}

img {
  pointer-events: none;
  width: 20px !important;
  height: 20px !important;
  display: inline-block;
  position: absolute;
  left: 15px;
  top: 10px;
}

.actions {
  text-align: left;
  vertical-align: middle;
  color: #125dd6;
  padding-left: 45px;
}

.action {
  border: none;
  background: none;
  font-family: inherit;
  font-size: 13px !important;
  outline: none;
  color: #125dd6;
  cursor: pointer;
}

.action:hover {
  opacity: 0.8;
}
</style>

<script>
export default {
  props: {
    query: String
  },
  data() {
    return { isDone: false, started: false, text: "" };
  },
  methods: {
    play() {
      this.started = true;
      this.fill(this.query);
    },
    done() {
      this.isDone = true;
    },
    search() {
      const win = window.open(
        `https://www.google.com/search?q=${encodeURIComponent(this.text)}`,
        "_blank"
      );
      win.focus();
    },
    reset() {
      this.isDone = false;
      this.started = false;
      this.text = "";
    },
    fill(text) {
      const c = text.charAt(0);
      if (c == "") {
        this.done();
        return;
      }
      setTimeout(() => {
        this.text += c;
        if (this.$refs.text.scrollWidth > this.$refs.text.offsetWidth) {
          this.$refs.text.scrollLeft =
            this.$refs.text.scrollWidth - this.$refs.text.offsetWidth;
        }
        this.fill(text.substr(1));
      }, Math.random() * 120 + 20);
    }
  }
};
</script>