function stringCol(str1, str2) {
   let arr = [];

   for (let i = 0; i < str2.length; i++) {
      if (str1.includes(str2[i])) {
         arr.push(1);
      } else {
         arr.push(0);
      }
   }

   if (arr.every((item) => item === 1)) return true;
   return false;
}

console.log(stringCol("hello", "kk"));
