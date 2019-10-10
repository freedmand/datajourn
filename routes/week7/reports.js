import { randomIncident, random } from "./random";

export const reports = [];
let today = new Date(2019, 9, 9);
const numReports = 54;
for (let i = 0; i < numReports; i++) {
  const incident = randomIncident();
  incident.date = new Date(today.getTime());
  incident.number = numReports - i;
  today.setDate(today.getDate() - random() * 7);
  reports.unshift(incident);
}

