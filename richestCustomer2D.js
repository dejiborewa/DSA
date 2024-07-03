/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let total = 0;
  let highest = 0;

  for (let i = 0; i < accounts.length; ++i) {
    for (let j = 0; j < accounts[i].length; ++j) {
      total += accounts[i][j];

      if (j === accounts[i].length - 1) {
        if (total > highest) {
          highest = total;
        }

        total = 0;
      }
    }
  }

  return highest;
};

var maximumWealth2 = function (accounts) {
  let highest = 0;

  for (let i = 0; i < accounts.length; ++i) {
    const sumIndividualArray = accounts[i].reduce((acc, index) => acc + index);
    accounts[i] = sumIndividualArray;

    if (accounts[i] > highest) {
      highest = accounts[i];
    }
  }

  return highest;
};

const r = maximumWealth([
  [100, 5],
  [7, 3],
  [3, 0],
]);

const r2 = maximumWealth2([
  [1, 5],
  [7, 3],
  [3, 60],
]);

const r3 = maximumWealth2([
  [100, 5],
  [7, 3],
  [3, 0],
]);

console.log(r2);
