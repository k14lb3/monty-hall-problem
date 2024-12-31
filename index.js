/** @type {number} */
var count = 10000;
/** @type {['money', 'goat', 'goat'] | ['goat', 'money', 'goat'] | ['goat', 'goat', 'money']} */
var doors = [];
/** @type {number}*/
var moneyDoorIndex = 0;
/** @type {number[]}*/
var goatDoorIndexes = [];
/** @type {number}*/
var winCount = 0;

for (var i = 0; i < count; i++) {
  doors[0] = Math.random() < 1 / 3 ? 'money' : 'goat';
  goatDoorIndexes = [];

  if (doors[0] === 'money') {
    moneyDoorIndex = 0;
    doors[1] = 'goat';
    goatDoorIndexes.push(1);
    doors[2] = 'goat';
    goatDoorIndexes.push(2);
  } else {
    goatDoorIndexes.push(0);
    doors[1] = Math.random() < 1 / 3 ? 'money' : 'goat';

    if (doors[1] === 'money') {
      moneyDoorIndex = 1;
      doors[2] = 'goat';
      goatDoorIndexes.push(2);
    } else {
      goatDoorIndexes.push(1);
      doors[2] = 'money';
      moneyDoorIndex = 2;
    }
  }

  /** @type {0 | 1 | 2} */
  var doorIndex = Math.floor(Math.random() * 3);

  if (doorIndex === moneyDoorIndex) {
    doorIndex =
      goatDoorIndexes[Math.floor(Math.random() * goatDoorIndexes.length)];
  } else {
    doorIndex = moneyDoorIndex;
  }

  if (doorIndex === moneyDoorIndex) {
    winCount++;
  }
}

console.log(
  `wins: ${winCount} (${((winCount / count) * 100).toFixed(2)}%)`,
);

console.log(
  `loses: ${count - winCount} (${
    (((count - winCount) / count) * 100).toFixed(2)
  }%)`,
);
