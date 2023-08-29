var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(arr) {
  var totalGoal = arr.reduce(function (result, number) {
    return result + number.gold;
  }, 0);
  return totalGoal;
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23
