<template>
  <table v-if="rows != null" cellspacing="0">
    <tr>
      <th class="close" @click="$emit('close')">&times;</th>
      <th v-for="(header, i) in rows.headers" :key="i">
        <Header
          :header="header"
          :overallSurvey="survey"
          :survey="survey != null ? survey.results[i] : null"
        />
      </th>
    </tr>
    <tr v-for="index in rows.rowsRead" :key="index">
      <td>{{rows.start + index - 1}}</td>
      <td v-for="column in rows.columns" :key="column">
        <div
          class="cell"
        >{{rows.results[column - 1].codes[rows.results[column - 1].data[index - 1]]}}</div>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  table-layout: fixed;
}

.close {
  color: gray;
  font-size: 24px;
  cursor: pointer;
}

.close:hover {
  opacity: 0.8;
}

th,
td {
  border-right: solid 1px var(--accent);
  padding: 5px 10px;
  text-align: left;
  font-family: monospace;
  color: black;
  background: white;
}

.cell {
  overflow-wrap: break-word;
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
}

tr:last-child th,
tr:last-child td {
  border-bottom: none;
}

th:last-child,
td:last-child {
  border-right: none;
}

th:first-child {
  z-index: 12;
  background: white;
}

th:first-child,
td:first-child {
  position: sticky;
  left: 0;
  border-right: solid 3px var(--accent);
}

td:first-child {
  background: #f0f0f0;
  font-size: 12px;
  text-align: right;
  vertical-align: top;
}

th {
  vertical-align: top;
  border-bottom: solid 3px var(--accent);
  position: sticky;
  top: 0;
  z-index: 11;
  background: #fffafb;
}

td {
  border-bottom: solid 1px var(--accent);
  vertical-align: top;
}
</style>

<script>
import Header from "./Header";

export default {
  components: { Header },
  props: { rows: Object, survey: Object }
};
</script>