<template>
  <div>
    <div class="console">
      <div class="outputs">
        <div v-for="output in outputs" :key="output.id">
          <div class="output" :class="output.type">{{output.content}}</div>
        </div>
        <div class="info" v-if="outputs.length == 0">Enter code below to get started</div>
      </div>
      <div class="caret">&gt;</div>
      <input
        autocomplete="false"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        v-model="code"
        type="text"
        @keydown.enter="run()"
      />
    </div>
    <div class="actions">
      <button @click="reset" class="action">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.console {
  border: solid 1px black;
  padding: 5px;
  border-radius: 5px;
}

.outputs {
  border-bottom: solid 1px gainsboro;
}

.output {
  font-family: monospace;
  white-space: pre-wrap;
}

.input::before {
  content: "> ";
  font-weight: bold;
  color: #194fff;
}

.normal::before {
  content: "< ";
  color: gray;
}

input {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: monospace;
  padding-left: 20px;
  outline: none;
  border: none;
}

.caret {
  position: absolute;
  font-weight: bold;
  color: #194fff;
  z-index: 2;
  padding-left: 0;
  padding-top: 2px;
}

.info {
  font-size: 14px;
  color: gray;
}

.actions {
  text-align: right;
}

.action {
  border: none;
  background: none;
  font-family: inherit;
  font-size: 13px !important;
  outline: none;
  color: var(--accent);
  cursor: pointer;
}

.action:hover {
  opacity: 0.8;
}
</style>

<script>
export default {
  data() {
    return {
      code: "",
      outputs: [],
      preCode: [],
      id: 1
    };
  },
  props: {
    preload: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    if (this.preload.length != 0) {
      for (let i = 0; i < this.preload.length; i++) {
        this.run(this.preload[i]);
      }
    }
  },
  methods: {
    reset() {
      this.code = "";
      this.outputs = [];
      this.preCode = [];
    },
    pushOutput(output) {
      output.id = this.id++;
      this.outputs.push(output);
    },
    eval(code) {
      const pushOutput = o => this.pushOutput(o);
      const context = {
        console: {
          log(...msg) {
            pushOutput({
              type: "normal",
              content: msg.join(" ")
            });
          },
          error(...msg) {
            pushOutput({
              type: "error",
              content: msg.join(" ")
            });
          }
        }
      };
      return window.runCode(code, context);
    },
    sanitize(code) {
      // Remove smart quotes and apostrophes
      return code
        .replace("“", '"')
        .replace("”", '"')
        .replace("‘", "'")
        .replace("’", "'");
    },
    run(preloadCode = null) {
      const code = this.sanitize(preloadCode == null ? this.code : preloadCode);

      const allCode = [...this.preCode, code].join(";undefined;\n\n");
      this.code = "";
      this.pushOutput({
        type: "input",
        content: code
      });
      try {
        const result = this.eval(allCode);
        this.pushOutput({
          type: "normal",
          content: result
        });
        this.preCode.push(code);
      } catch (e) {
        this.pushOutput({
          type: "error",
          content: `${e}`
        });
      }
    }
  }
};
</script>