<template>
  <span>
    <img src="./assets/slides_icon.svg" v-if="icon == 'slides'" />
    <button>
      <slot></slot>
    </button>
  </span>
</template>

<style scoped>
span {
  position: relative;
  display: inline-block;
}

img {
  position: absolute;
  left: 11px;
  top: 9px;
  vertical-align: middle;
  z-index: 2;
  pointer-events: none;
}

button {
  background: var(--accent);
  border-radius: 5px;
  color: white;
  font-family: inherit;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 5px 15px 5px 37px;
  font-weight: 600;
  vertical-align: middle;
  cursor: pointer;
}

button:hover {
  opacity: var(--hover-opacity);
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>