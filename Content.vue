<template>
  <div ref="container" class="container" :class="{expanded}">
    <div class="content" v-show="!searching">
      <div class="noprint">
        <!-- <Actions /> -->
      </div>
      <div class="pad"></div>
      <slot></slot>
      <div class="arrows noprint">
        <Arrow v-if="route.previous != null" direction="left" :route="route.previous" />
        <Arrow v-if="route.next != null" direction="right" :route="route.next" />
      </div>
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
  transition: all 0.2s ease;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.container.expanded {
  left: 0;
}

@media print {
  .container {
    left: 0;
    position: relative;
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

.content >>> h3 {
  font-size: 19px;
  margin: 16px 0;
}

.content >>> li {
  margin: 0.5em 0;
}

.content >>> img {
  width: 100%;
  margin: 0 auto;
  display: block;
}

.content >>> code {
  background: #eeeeee;
  padding: 2px 4px;
}

.content >>> summary {
  outline: none;
  cursor: pointer;
}

.content >>> .date {
  margin-top: -20px;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
}

.content >>> details {
  margin: 1em 0;
}

.content >>> video {
  width: 100%;
}

.pad {
  margin-top: 64px;
}

.arrows {
  display: block;
  text-align: left;
  margin: 2em 0;
}
</style>

<script>
import Actions from "./Actions";
import Arrow from "./Arrow";

import { mapState } from "vuex";

export default {
  components: { Actions, Arrow },
  props: {
    route: Object
  },
  computed: {
    ...mapState({
      searching: state => state.searching
    }),
    expanded() {
      return !this.$store.state.sidebarExpanded;
    }
  },
  watch: {
    $route() {
      // Scroll to top of page
      this.$refs.container.scrollTop = 0;
    }
  }
};
</script>