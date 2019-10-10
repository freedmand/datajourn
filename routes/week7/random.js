import { horizontal, vertical, colors, cars, rearEndIncidents, rearEndReasons, eastWest, northSouth, busNumbers, goodWeather, badWeather, badInjuries, selfDrivingIncidents } from './streets.js';

let seed = 1;
export function random() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function select(list) {
  const length = list.length;
  return list[Math.floor(random() * length)];
}

export function intersection(horiz = null, vert = null) {
  if (horiz == null) horiz = select(horizontal);
  if (vert == null) vert = select(vertical);
  return `${horiz} and ${vert} st`;
}

export function carModel() {
  return `${select(colors)} ${select(cars)}`
}

export function rearEndIncident() {
  const busNumber = `${select(busNumbers)}`;
  const ns = select(northSouth);
  const ew = select(eastWest);
  const car = carModel();
  const horiz = select(horizontal);
  const vert = select(vertical);
  const reason = select(rearEndReasons);
  const incident = select(rearEndIncidents);
  const weather = select(goodWeather);
  const description = incident.description.replace('$busNumber', busNumber).replace('$northSouth', ns).replace('$eastWest', ew).replace('$car', car).replace('$car', car).replace('$rearEndReason', reason).replace('$horizontal', horiz).replace('$vertical', vert);
  const injury = incident.injury;
  return { description, injury, location: intersection(horiz, vert), weather };
}

export function selfDrivingIncident() {
  const busNumber = `${select(busNumbers)}`;
  const weather = select(badWeather);
  const incident = select(selfDrivingIncidents);
  const horiz = select(horizontal);
  const vert = select(vertical);
  const injury = incident.injury.replace('$badInjury', select(badInjuries));
  const description = incident.description.replace('$busNumber', busNumber).replace('$horizontal', horiz).replace('$vertical', vert);
  return { description, injury, location: intersection(horiz, vert), weather }
}

export function randomIncident() {
  if (random() < 0.6) return rearEndIncident();
  return selfDrivingIncident();
}