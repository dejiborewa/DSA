/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let m = Math.floor((start + end) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      start = m + 1;
    } else {
      end = m - 1;
    }
  }

  return -1;
};

const r = search([1, 7, 8, 9, 10, 19], -700);
console.log(r);
