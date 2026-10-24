const ransomNote = (ransomNote: string, magazine: string) => {
   let ref = [];

   for (let i = 0; i < ransomNote.length; ++i) {
      for (let j = 0; j < magazine.length; ++j) {
         if (ransomNote[i] === magazine[j]) {
            magazine = magazine.slice(0, j) + magazine.slice(j + 1);
            ref.push(ransomNote[i]);
            break;
         }
      }
   }

   return ref.join("") === ransomNote ? true : false;
};

const ransomNoteOptimized = (ransomNote: string, magazine: string) => {
   const charCount = {};

   for (let char of magazine) {
      charCount[char] = (charCount[char] ?? 0) + 1;
   }

   for (let char of ransomNote) {
      if (!charCount[char] || charCount[char] === 0) {
         return false;
      }

      charCount[char]--;
   }

   return true;
};

const ransomNoteWithMap = (ransomNote: string, magazine: string) => {
   const charCount = new Map<string, number>();

   for (let char of magazine) {
      charCount.set(char, (charCount.get(char) ?? 0) + 1);
   }

   for (let char of ransomNote) {
      if (!charCount.get(char) || charCount.get(char) == 0) return false;
      charCount.set(char, charCount.get(char)! - 1);
   }

   return true;
};

console.log(ransomNote("aa", "aab"));
console.log(ransomNoteOptimized("aa", "aab"));
console.log(ransomNoteWithMap("aa", "ab"));
