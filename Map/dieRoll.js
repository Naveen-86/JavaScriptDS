let max_1 = 0, sum_1 = 0;
let max_2 = 0, sum_2 = 0;
let max_3 = 0, sum_3 = 0;
let max_4 = 0, sum_4 = 0;
let max_5 = 0, sum_5 = 0;
let max_6 = 0, sum_6 = 0;
let max_reached;
let die_roll_track = new Map();

while (true) {
  let diceRoll = Math.floor(1 + ((Math.random() * 10) % 6));
  switch (diceRoll) {
    case 1:
      max_1++;
      sum_1 = sum_1 + diceRoll;
      if (sum_1 == diceRoll * 10) {
        max_reached = 1;
        break;
      }
    case 2:
      max_2++;
      sum_2 = sum_2 + diceRoll;
      if (sum_2 == diceRoll * 10) {
        max_reached = 2;
        break;
      }
    case 3:
      max_3++;
      sum_3 = sum_3 + diceRoll;
      if (sum_3 == diceRoll * 10) {
        max_reached = 3;
        break;
      }
    case 4:
      max_4++;
      sum_4 = sum_4 + diceRoll;
      if (sum_4 == diceRoll * 10) {
        max_reached = 4;
        break;
      }
    case 5:
      max_5++;
      sum_5 = sum_5 + diceRoll;
      if (sum_5 == diceRoll * 10) {
        max_reached = 5;
        break;
      }
    case 6:
      max_6++;
      sum_6 = sum_6 + diceRoll;
      if (sum_6 == diceRoll * 10) {
        max_reached = 6;
        break;
      }
    default:
      console.log("Hurray!");
  }

  die_roll_track.set(1, max_1);
  die_roll_track.set(2, max_2);
  die_roll_track.set(3, max_3);
  die_roll_track.set(4, max_4);
  die_roll_track.set(5, max_5);
  die_roll_track.set(6, max_6);

  let temp = [];
  for (let [key, value] of die_roll_track) {
    if (value == 10) {
      console.log("max rolled number = " + key);
    }
    temp.push(value);
  }
  let minRolled = Math.min(...temp);
  console.log("Min rolled number = " + minRolled);
}