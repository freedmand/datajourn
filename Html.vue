<template>
  <div class="table">
    <div class="panes">
      <div class="pane">
        <textarea v-model="htmlRaw" class="raw"></textarea>
      </div>
      <div class="pane code">
        <HtmlCode v-if="htmlCode != null" :elem="htmlCode" :excludeSelf="true" />
      </div>
      <div ref="content" class="pane content" v-html="htmlRaw"></div>
    </div>
  </div>
</template>

<style scoped>
.table {
  display: table;
  width: 100%;
}

.panes {
  display: table-row;
}

.pane {
  display: table-cell;
  vertical-align: top;
  width: 33%;
  padding: 1em;
  box-sizing: border-box;
}

textarea {
  width: 100%;
}

.raw,
.code {
  font-family: monospace;
}
</style>

<script>
import HtmlCode from "./HtmlCode";

export default {
  data() {
    return {
      htmlRaw: ""
    };
  },
  computed: {
    htmlCode() {
      if (this.htmlRaw == null) return null;
      const div = document.createElement("div");
      div.innerHTML = this.htmlRaw;
      return div;
    }
  },
  components: { HtmlCode }
};
</script>