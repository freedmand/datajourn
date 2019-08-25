<template>
  <div class="container">
    <div class="content" v-show="!searching">
      <Actions />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  left: var(--sidebar-width);
  top: 0;
  right: 0;
  bottom: 0;
  text-align: left;
}

@media screen and (max-width: 850px) {
  .container {
    left: 0;
  }
}

.content {
  max-width: 900px;
  margin: 0 auto 4em auto;
  padding: 0 1em;
}

.content >>> * {
  line-height: 150%;
  font-size: 16px;
}

.content >>> h1 {
  font-size: 28px;
  margin: 23px 0;
}

.content >>> h2 {
  font-size: 22px;
  margin: 18px 0;
}

.content >>> li {
  margin: 0.5em 0;
}
</style>

<script>
import Actions from "./Actions";

import { mapState } from "vuex";

export default {
  components: { Actions },
  computed: {
    ...mapState({
      searching: state => state.searching
    })
  }
};
</script>