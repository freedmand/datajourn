export const vertical = ['Front', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', 'Broad', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd'];

export const horizontal = [
  'Fairmount Ave', 'North St', 'Wallace St', 'Mt Vernon St', 'Green St', 'Brandywine St', 'Spring Garden St', 'Hamilton St', 'Noble St', 'Callowhill St', 'Wood St', 'Vine St', 'Race St', 'Cherry St', 'Arch St', 'JFK Blvd', 'Market St', 'Chestnut St', 'Sansom St', 'Walnut St', 'Locust St', 'Spruce St', 'Pine St', 'Lombard St', 'South St', 'Kater St', 'Bainbridge St', 'Fitzwater St', 'Catharine St', 'Christian St', ' Carpenter St', 'Washington Ave'
];

export const colors = [
  'red', 'black', 'blue', 'silver', 'green', 'yellow', 'red', 'gray'
];

export const cars = ["Toyota Camry", "Honda Accord", "Nissan Altima", "Ford Escape", "Nissan Rogue", "Chevrolet Equinox", "Hyundai Elantra", "Nissan Sentra", "Ford Fusion", "Toyota Highlander", "Ford Mustang", "Toyota Tacoma", "Chevrolet Impala", "Subaru Outback", "Jeep Cherokee", "Subaru Forester", "Chevrolet Camaro", "Chevrolet Corvette", "Tesla Model 3", "Volkswagen Jetta", "Chevrolet Colorado", "Dodge Challenger", "Toyota Sienna", "Chevrolet Volt", "Acura MDX", "Acura RDX", "Kia Optima", "Ford Expedition", "Mazda6", "BMW X5", "Lexus ES", "Porsche 911", "Honda Ridgeline", "Audi A4", "FIAT 500", "Toyota Corolla Hatchback", "GMC Terrain", "Volvo XC90", "Kia Sedona", "BMW 5 Series", "Audi Q5", "Volvo S60", "Audi A3", "FIAT 500L", "Mazda CX-9", "Honda Accord Hybrid", "GMC Canyon", "Toyota 86", "Porsche Panamera"];

export const eastWest = ['eastbound', 'westbound'];
export const northSouth = ['northbound', 'southbound'];
export const busNumbers = [9, 21, 42, 4, 27, 32, 16, 23, 45, 38, 44, 47, 48, 57, 17, 33, 42, 64, 40, 29, 79, 37, 7, 68, 2, 49];

export const rearEndReasons = [
  'was accelerating to try to make a stop light that was turning yellow, while the bus was stopped to pick up passengers',
  'accelerated too quickly from a green light from behind the bus',
  'nicked the side of the bus as it passed on left side',
  'nicked the side of the bus as it passed on left side while the bus was stopped to pick up passengers',
  'nicked the side of the bus as it passed on right side',
  'was traveling too quickly behind the bus as the bus was stopped to let pedestrians cross',
  'was traveling too quickly behind the bus as the bus was stopped at a red light',
];

export const goodWeather = [
  'Sunny', 'Mild clouds', 'Windy', 'Scattered clouds', 'Light rain',
];

export const rearEndIncidents = [
  {
    description: 'Bus #$busNumber was driving $eastWest on $horizontal and was rear-ended by a $car. The $car $rearEndReason.',
    weather: '$goodWeather',
    injury: 'No one was injured.'
  },
  {
    description: 'Bus #$busNumber was driving $northSouth on $vertical and was rear-ended by a $car. The $car $rearEndReason.',
    weather: '$goodWeather',
    injury: 'No one was injured.'
  },
  {
    description: 'Bus #$busNumber was driving $eastWest on $horizontal and was rear-ended by a $car. The $car $rearEndReason.',
    weather: '$goodWeather',
    injury: 'There were minor cuts and scratches but no serious injuries.'
  },
  {
    description: 'Bus #$busNumber was driving $northSouth on $vertical and was rear-ended by a $car. The $car $rearEndReason.',
    weather: '$goodWeather',
    injury: 'There were minor cuts and scratches but no serious injuries.'
  },
];

export const badWeather = [
  'Medium rain',
  'Heavy rain',
  'Heavy rain',
  'Foggy',
  'Cloudy',
  'Snowing',
  'Snowing',
  'Hailing',
  'Hailing',
  'Scattered clouds',
];

export const badInjuries = [
  'No one was injured',
  'There were minor cuts and scratches but no serious injuries',
  '1 person was seriously injured',
  '2 people were seriously injured',
  '3 people were seriously injured',
  '5 people were seriously injured',
  '7 people were seriously injured',
  '8 people were seriously injured',
  '1 fatality, 5 people were seriously injured',
  '1 fatality, 7 people were seriously injured',
  '1 fatality, 9 people were seriously injured',
  '2 fatalities, 10 people were seriously injured',
]

export const selfDrivingIncidents = [
  {
    description: 'Bus #$busNumber drove off the road and into the sidewalk on $horizontal. Fortunately, no one was in the way of the bus at the time.',
    weather: '$badWeather',
    injury: 'There were minor cuts and scratches but no serious injuries.'
  },
  {
    description: 'Bus #$busNumber drove off the road and into the sidewalk on $vertical. Fortunately, no one was in the way of the bus at the time.',
    weather: '$badWeather',
    injury: 'There were minor cuts and scratches but no serious injuries.'
  },
  {
    description: 'Bus #$busNumber drove off the road and into a busy pedestrian section on $horizontal.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber drove off the road and into a busy pedestrian section on $vertical.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber swerved suddenly on $horizontal and crashed into a building.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber swerved suddenly on $vertical and crashed into a building.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber ran a red light and drove into a street light post.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber drove into a street light post.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
  {
    description: 'Bus #$busNumber drove the wrong way into oncoming traffic and collided with a car head-on.',
    weather: '$badWeather',
    injury: '$badInjury'
  },
];