let count = 0;

function stepToReduceToZero(n) {
   if (n === 0) {
      return count;
   }

   if (n % 2 === 0) {
      n = n / 2;
   } else {
      n = n - 1;
   }

   count++;
   return stepToReduceToZero(n);
}

console.log(stepToReduceToZero(123));
