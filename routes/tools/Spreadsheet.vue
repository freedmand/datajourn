<template>
  <div>
    <h1>Spreadsheet</h1>
    <p>A tool to quickly peek through .csv files, large and small.</p>
    <Upload v-if="file == null" @file="handleUpload($event)" />
    <Sheet @close="reset()" v-if="file != null" :file="file" />
  </div>
</template>

<script>
import Upload from "./spreadsheet/Upload";
import Sheet from "./spreadsheet/Sheet";
import Progress from "../../Progress";

export default {
  components: { Upload, Progress, Sheet },
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleUpload(file) {
      this.file = file;
    },
    reset() {
      this.file = null;
    }
  }
};
</script>