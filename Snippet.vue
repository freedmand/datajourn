<template>
  <p class="snippet">
    <span v-if="result.moreAtStart">...</span>
    <span ref="elem">
      <slot></slot>
    </span>
    <span v-if="result.moreAtEnd">...</span>
  </p>
</template>

<style scoped>
* >>> .highlight {
  font-weight: bold;
  background: #ffe920;
}
</style>

<script>
export default {
  props: {
    result: Object
  },
  mounted() {
    const elem = this.$refs.elem;
    let textContent = elem.textContent;
    let normalizedTextContent = textContent.toLowerCase();

    // Clear elem
    while (elem.firstChild) elem.removeChild(elem.firstChild);

    let idx = 0;
    while (idx != -1) {
      const newIdx = normalizedTextContent.indexOf(this.result.query, idx);
      if (newIdx == -1) break;
      // Push snippet
      if (newIdx > idx) {
        // First push un-bolded, if necessary.
        const textNode = document.createTextNode(
          textContent.substring(idx, newIdx)
        );
        elem.appendChild(textNode);
      }
      // Push bolded text.
      const span = document.createElement("span");
      span.className = "highlight";
      span.textContent = textContent.substring(
        newIdx,
        newIdx + this.result.query.length
      );
      elem.appendChild(span);

      // Update index.
      idx = newIdx + this.result.query.length;
    }

    if (idx != textContent.length - 1) {
      // Push un-bolded end text, if necessary.
      const textNode = document.createTextNode(textContent.substring(idx));
      elem.appendChild(textNode);
    }
  }
};
</script>