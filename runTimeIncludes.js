function time(fn) {
   const now = Date.now();
   const b = fn();
   return `time: ${Date.now() - now}, result:${b}`;
}

const createString = (n) => {
   let s = "";
   for (let i = 0; i < n; i++) {
      s = s.concat("", String(i));

      if (i === n - 1) {
         s = s.concat("", ".");
      }
   }
   return s;
};

const findIndex = (n) => {
   const longString = createString(n);
   return longString.includes(".");
};

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing includes");
tests.forEach((t) => {
   console.log(
      t,
      time(() => findIndex(t)),
   );
});
