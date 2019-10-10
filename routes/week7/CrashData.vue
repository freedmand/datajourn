<template>
  <div>
    <h1>Crash Data</h1>
    <p>You were able to request public records from the city of Philadelphia for the incident reports for all crashes involving AutoSepta.</p>
    <p>Depending on which group you are in, try to focus on a different aspect of the data:</p>
    <ul>
      <li>Group 1: Whether the bus driver was at fault or not</li>
      <li>Group 2: The weather conditions</li>
      <li>Group 3: The location of the crashes</li>
    </ul>
    <h2>The raw data (54 total reports):</h2>
    <p>
      <IncidentReport v-for="(report, i) in reports" :key="i" :report="report" />
    </p>
  </div>
</template>

<script>
import IncidentReport from "./IncidentReport";
import { reports } from "./reports.js";

export default {
  components: { IncidentReport },
  data() {
    return {
      reports
    };
  }
};
</script>