<template>
  <div>
    <div class="tablecontainer">
      <Table :rows="rows" :survey="survey" @close="$emit('close')" />
    </div>

    <div class="status">
      <span v-if="rows == null">Loading table...</span>
      <span
        v-if="rows != null"
        class="message"
        style="vertical-align: middle;"
      >Displaying rows {{rows.start.toLocaleString()}}-{{rows.end.toLocaleString()}} out of {{survey != null ? survey.totalRows.toLocaleString() : `[calculating total...]`}}</span>
      <Progress
        v-if="rows == null && survey == null"
        style="padding-left: 10px;"
        class="small"
        :progress="initialUploadProgress / 100"
      />
      <span style="display: inline-block;">
        <Progress
          v-if="rows != null && survey == null"
          style="padding-left: 10px;"
          class="small"
          :progress="surveyProgress / 100"
        />
      </span>
      <Progress
        v-if="seeking"
        style="padding-left: 10px;"
        class="small"
        :progress="seekProgress / 100"
      />
      <input
        v-if="survey && !seeking"
        type="range"
        min="0"
        :max="survey.totalRows - chunk"
        :value="rows.start"
        @change="handleChange($event)"
      />
    </div>
  </div>
</template>

<style scoped>
.tablecontainer {
  overflow: scroll;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  bottom: 40px;
  right: 0;
  background: white;
}

.status {
  position: fixed;
  bottom: 0;
  height: 40px;
  padding: 0 20px;
  background: #ebebeb;
  left: 0;
  right: 0;
  z-index: 10;
}

.message {
  vertical-align: middle;
  line-height: 40px;
  height: 40px;
}
</style>

<script>
import Table from "./Table";
import Progress from "../../../Progress";

export default {
  components: { Table, Progress },
  props: { file: File },
  data() {
    return {
      initialUploadProgress: 0,
      surveyProgress: 0,
      survey: null,
      rows: null,
      chunk: 500,
      seeking: false,
      seekProgress: 0
    };
  },
  mounted() {
    this.worker = new Worker("/workers/worker.js");
    this.worker.addEventListener("message", e => {
      const data = e.data;
      const type = data.type;
      if (type == "progress-initialUpload") {
        this.initialUploadProgress = data.progress;
      } else if (type == "initialUpload") {
        setTimeout(() => {
          this.rows = data.results;

          this.worker.postMessage({
            file: this.file,
            config: { survey: true, surveyCutoff: 1000 },
            complete: "survey"
          });
        }, 50);
      } else if (type == "progress-survey") {
        this.surveyProgress = data.progress;
      } else if (type == "progress-seek") {
        this.seekProgress = data.progress;
      } else if (type == "survey") {
        setTimeout(() => {
          this.survey = data.results;
        }, 50);
      } else if (type == "seek") {
        setTimeout(() => {
          this.rows = data.results;
          this.seeking = false;
          this.seekProgress = 0;
        }, 50);
      }
    });

    this.worker.postMessage({
      file: this.file,
      config: { rowEnd: this.chunk, sendProgress: true },
      complete: "initialUpload"
    });
  },
  methods: {
    handleChange(e) {
      this.seeking = true;
      const start = e.target.valueAsNumber;
      const end = start + this.chunk;

      this.worker.postMessage({
        file: this.file,
        config: {
          rowStart: start,
          rowEnd: end,
          sendProgress: true,
          cache: this.survey.cacheIndices,
          firstRow: this.survey.firstRow
        },
        complete: "seek"
      });
    }
  }
};
</script>