<template>
  <div>
    <div class="outer">
      <input
        type="file"
        :class="{dragging}"
        @dragenter="enter()"
        @dragover="enter()"
        @dragleave="leave()"
        @drop="handleDrop($event)"
        @change="handleChange()"
        ref="files"
      />
      <div class="upload">Drop a CSV file here, or click to upload one</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragging: false
    };
  },
  methods: {
    enter() {
      this.dragging = true;
    },
    leave() {
      this.dragging = false;
    },
    handleDrop() {
      this.leave();
    },
    handleChange() {
      this.leave();
      this.handleFiles(this.$refs.files.files);
    },
    handleFiles(files) {
      if (files.length != 1) return;
      const file = files[0];
      this.leave();
      this.$refs.files.value = null;
      this.$emit("file", file);
    }
  }
};
</script>

<style scoped>
.upload {
  height: 150px;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  background: #fffafb;
  color: black;
  transition: all 0.2s ease;
  border: solid 1px var(--accent);
  border-radius: 6px;
}

input[type="file"]:hover + .upload,
input[type="file"].dragging + .upload {
  background: #fc4762;
  color: white;
}

.outer {
  display: table;
  width: 100%;
  position: relative;
}

input[type="file"] {
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
}
</style>