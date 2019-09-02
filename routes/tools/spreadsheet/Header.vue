<template>
  <div class="header">
    <h1 @click="showStats = !showStats">{{header}}</h1>
    <div class="stats" v-if="survey != null" v-show="showStats">
      <div class="row">
        <div class="stat">Repeat values</div>
        <div class="value">{{repeatValues}}</div>
      </div>
      <div class="row">
        <div class="stat">Blank values</div>
        <div class="value">{{blankValues}}</div>
      </div>
      <div class="row">
        <div class="stat">Numeric values</div>
        <div class="value">{{numericValues}}</div>
      </div>

      <!-- Numeric stats -->
      <div class="row small" v-if="showNumeric">
        <div class="stat">Positives</div>
        <div class="value">{{positiveValues}}</div>
      </div>
      <div class="row small" v-if="showNumeric">
        <div class="stat">Negatives</div>
        <div class="value">{{negativeValues}}</div>
      </div>
      <div class="row small" v-if="showNumeric">
        <div class="stat">Zeros</div>
        <div class="value">{{zeroValues}}</div>
      </div>

      <div class="row" v-if="showNumeric">
        <div class="stat">Statistics</div>
      </div>

      <div class="row small" v-if="showNumeric">
        <div class="stat">Min</div>
        <div class="value">{{minNumber}}</div>
      </div>
      <div class="row small" v-if="showNumeric">
        <div class="stat">Max</div>
        <div class="value">{{maxNumber}}</div>
      </div>
      <div class="row small" v-if="showNumeric">
        <div class="stat">Average</div>
        <div class="value">{{averageNumber}}</div>
      </div>
      <div class="row small" v-if="showNumeric">
        <div class="stat">Sum</div>
        <div class="value">{{sumNumber}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--accent);
  font-size: 17px !important;
  margin: 0.5em 0 !important;
}

.stats {
  color: #000000b0;
  display: table;
  width: 200px;
}

.stats * {
  font-family: monospace !important;
  font-size: 14px !important;
  font-weight: normal;
}

.row {
  display: table-row;
}

.stat {
  display: table-cell;
  text-align: left;
}

.value {
  display: table-cell;
  text-align: right;
}

.row.small * {
  font-size: 12px !important;
}

.row.small .stat {
  padding-left: 15px;
}

.row.small .value {
  opacity: 0.8;
}
</style>

<script>
function formatApproximate(num) {
  return `≈${(num * 100).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}%`;
}

function formatExact(num) {
  return `${(num * 100).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  })}%`;
}

function format(num) {
  const expanded = num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  });
  if (expanded.length > 10) {
    return num.toExponential(2);
  }
  return expanded;
}

export default {
  props: {
    header: String,
    overallSurvey: Object,
    survey: Object
  },
  data() {
    return {
      showStats: false
    };
  },
  computed: {
    repeatValues() {
      return formatApproximate(1 - this.survey.numUniques / this.survey.count);
    },
    blankValues() {
      return formatExact(this.survey.numBlanks / this.survey.countAll);
    },

    // Numbers
    numericValues() {
      return formatExact(this.survey.numNumbers / this.survey.countAll);
    },
    positiveValues() {
      return formatExact(this.survey.positiveNumbers / this.survey.numNumbers);
    },
    negativeValues() {
      return formatExact(this.survey.negativeNumbers / this.survey.numNumbers);
    },
    zeroValues() {
      return formatExact(this.survey.zeroNumbers / this.survey.numNumbers);
    },

    // Number stats
    minNumber() {
      return format(this.survey.minNumber);
    },
    maxNumber() {
      return format(this.survey.maxNumber);
    },
    averageNumber() {
      return format(this.survey.sum / this.survey.countAll);
    },
    sumNumber() {
      return format(this.survey.sum);
    },

    showNumeric() {
      return this.survey.numNumbers > 0;
    }
  }
};
</script>