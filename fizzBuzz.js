function fizzBuzz(n) {
   return Array.from({ length: n }, (a, i) => {
      if ((i + 1) % 3 === 0) {
         return "Fizz";
      }

      if ((i + 1) % 5 === 0) {
         return "Buzz";
      }

      if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) {
         return "FizzBuzz";
      }

      const index = i + 1;
      return index.toString();
   });
}

console.log(fizzBuzz(15));
