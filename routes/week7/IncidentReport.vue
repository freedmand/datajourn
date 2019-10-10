<template>
  <div>
    <div class="paper">
      <img
        style="max-width: 300px; margin: 0"
        src="../../assets/images/week7/report_header.png"
        alt
      />
      <h1>Crash report #{{report.number}}</h1>
      <p>
        <b>Incident description:</b>
        <br />
        {{report.description}}
      </p>
      <p>
        <b>Incident location:</b>
        <br />
        {{report.location}}
      </p>
      <p>
        <b>Incident date:</b>
        <br />
        {{date}}
      </p>
      <p>
        <b>Weather:</b>
        <br />
        {{report.weather}}
      </p>
      <p>
        <b>Injury description:</b>
        <br />
        {{report.injury}}
      </p>
    </div>
  </div>
</template>

<style scoped>
.paper {
  max-width: 400px;
  padding: 3em 2em;
  border: solid 1px black;
  margin: 1em;
  font-family: serif;
  color: black;
  background: rgb(252, 252, 252);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

.paper h1 {
  font-size: 20px;
}
</style>

<script>
export default {
  props: {
    report: Object
  },
  computed: {
    date() {
      return `${this.report.date.getMonth() +
        1}/${this.report.date.getDate()}/${this.report.date.getFullYear()}`;
    }
  }
};
</script>