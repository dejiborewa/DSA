var sortedSquares = function(nums) {
   // return nums.map((num) => num * num).sort((a, b) => a - b);

   const n = nums.length;
   const result = new Array(n);
   let left = 0;
   let right = n - 1;
   let write = n - 1;

   while (left <= right) {
       const leftSq = nums[left] * nums[left];
       const rightSq = nums[right] * nums[right];
       if (leftSq > rightSq) {
           result[write] = leftSq;
           left++;
       } else {
           result[write] = rightSq;
           right--;
       }
       write--;
   }

   return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11, 13]))
console.log(sortedSquares([-5, -3, -2, -1]))
console.log(sortedSquares([-4, -1, 0, 3, 10]))


// 0 < 5
