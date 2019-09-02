<template>
  <div>
    <Column
      v-for="(column, i) in results.results"
      :key="i"
      :header="results.headers[i]"
      :results="column"
    />
  </div>
</template>

<script>
import Column from "./Column";

export default {
  components: { Column },
  props: {
    results: Object
  }
};
</script>