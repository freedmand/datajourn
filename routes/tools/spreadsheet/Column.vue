<template>
  <div class="column">
    <div class="header">
      <h1>{{header}}</h1>
    </div>
    <div class="content">
      <h2>Sample values</h2>
      <div class="sample">
        <div class="row" v-for="(datum, i) in results.data" :key="i">{{results.codes[datum]}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: inline-block;
  border: solid 1px var(--accent);
  border-radius: 5px;
  margin: 0.5em;
  background: #fffafb;
}

.content {
  padding: 10px 18px;
}

.header {
  background: var(--accent);
  color: white;
  padding: 6px 18px;
}

.column h1 {
  font-size: 15px !important;
  margin: 0;
  border-bottom: solid 1px var(--accent);
}

.column h2 {
  font-size: 12px !important;
  margin: 0.5em 0;
}

.sample {
  max-height: 120px;
  overflow: scroll;
  font-family: monospace;
  padding: 5px;
  border: solid 1px gainsboro;
  background: white;
}

.row {
  font-size: 12px !important;
  border-bottom: solid 1px rgb(240, 240, 240);
}

.row:last-child {
  border-bottom: none;
}
</style>

<script>
export default {
  props: {
    results: Object,
    header: String
  }
};
</script>