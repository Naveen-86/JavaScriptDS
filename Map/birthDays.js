let jan = new Map();
let feb = new Map();
let mar = new Map();
let apr = new Map();
let may = new Map();
let jun = new Map();
let jul = new Map();
let aug = new Map();
let sep = new Map();
let oct = new Map();
let nov = new Map();
let dec = new Map();
let persons = 1;
while (persons <= 50) {
  persons++;
  let month = Math.floor(1 + ((Math.random() * 100) % 12));

  switch (month) {
    case 1:
      jan.set(persons, month);
      break;
    case 2:
      feb.set(persons, month);
      break;
    case 3:
      mar.set(persons, month);
      break;
    case 4:
      apr.set(persons, month);
      break;
    case 5:
      may.set(persons, month);
      break;
    case 6:
      jun.set(persons, month);
      break;
    case 7:
      jul.set(persons, month);
      break;
    case 8:
      aug.set(persons, month);
      break;
    case 9:
      sep.set(persons, month);
      break;
    case 10:
      oct.set(persons, month);
      break;
    case 11:
      nov.set(persons, month);
      break;
    case 12:
      dec.set(persons, month);
      break;
    default:
      console.log("thanks!");
  }
}

for (let person of jan.keys()) {
  console.log(person + " -> Jan");
}

for (let person of feb.keys()) {
  console.log(person + " -> Feb");
}

for (let person of mar.keys()) {
  console.log(person + " -> Mar");
}

for (let person of apr.keys()) {
  console.log(person + " -> Apr");
}

for (let person of may.keys()) {
  console.log(person + " -> May");
}

for (let person of jun.keys()) {
  console.log(person + " -> Jun");
}

for (let person of jul.keys()) {
  console.log(person + " -> Jul");
}

for (let person of aug.keys()) {
  console.log(person + " -> Aug");
}

for (let person of sep.keys()) {
  console.log(person + " -> Sep");
}

for (let person of oct.keys()) {
  console.log(person + " -> Oct");
}

for (let person of nov.keys()) {
  console.log(person + " -> Nov");
}

for (let person of dec.keys()) {
  console.log(person + " -> Dec");
}