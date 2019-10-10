<template>
  <div>
    <div v-if="elem.nodeType != textNode">
      <div :class="{inline: !expand}" @click="toggleExpand()" v-if="!excludeSelf" class="tag">
        <span v-if="expand" class="arrow">▼</span>
        <span v-if="!expand" class="arrow">▶</span>
        &lt;{{tag}}&gt;
      </div>
      <div v-if="expand" :class="{indent: !excludeSelf}">
        <HtmlCode v-for="(node, i) in nodes" :key="i" :elem="node" />
      </div>
      <span class="ellipse" @click="toggleExpand()" v-if="!expand">...</span>
      <div v-if="!excludeSelf" :class="{inline: !expand}" class="closetag">&lt;/{{tag}}&gt;</div>
    </div>
    <div
      :class="{indent: elem.nodeType != textNode}"
      v-if="elem.nodeType == textNode && expand"
    >{{elem.textContent}}</div>
    <div class="ellipse" v-if="elem.nodeType == textNode && !expand">...</div>
  </div>
</template>

<style scoped>
.tag {
  color: blue;
  cursor: pointer;
  user-select: none;
}

.closetag {
  color: blue;
  user-select: none;
}

.ellipse {
  cursor: pointer;
}

.inline {
  display: inline-block;
}

.arrow {
  font-size: 10px;
  margin-left: -14px;
  color: rgb(102, 102, 243);
  vertical-align: middle;
}

.indent {
  padding-left: 1em;
  margin-left: 0.6em;
  border-left: solid 2px rgb(134, 134, 194);
  background: rgba(0, 0, 255, 0.04);
}
</style>

<script>
export default {
  props: {
    elem: Node,
    excludeSelf: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textNode: Node.TEXT_NODE,
      expand: true
    };
  },
  name: "HtmlCode",
  computed: {
    nodes() {
      return this.elem.childNodes;
    },
    tag() {
      const tagName = this.elem.tagName;
      if (tagName == null || tagName.trim() == "") return "";
      return tagName.toLowerCase();
    }
  },
  methods: {
    toggleExpand() {
      this.expand = !this.expand;
    }
  }
};
</script>