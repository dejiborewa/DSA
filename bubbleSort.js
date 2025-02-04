function bubble_sort(arr) {
  let temp = null;
  let j = arr.length - 1;

  for (let i = 0; i < j; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

    if (i === j - 1) {
      j -= 1;
      i = -1;
    }
  }

  return arr;
}

console.log(bubble_sort([389, 4, 42, 69, 1, 7]));
/*
i = 0
j = 5
0 < 5

---- i = 0 => [389, 4, 42, 69, 1, 7]
389 > 4 => 4, 389
[4, 389, 42, 69, 1, 7]

--- i = 1 =>
389 > 42 => 42, 389
[4, 42, 389, 69, 1 , 7]

---- i = 2 =>
389 > 69 =>
[4, 42, 69, 389, 1 , 7]

---- i = 3
389 > 1 =>
[4, 42, 69, 1, 389, 7]

---- i = 4
389 > 7
[4, 42, 69, 1, 7, 389]

4 === 5 - 1

---------------

i = 0
j = 4

arr = [4, 42, 69, 1, 7, 389]
i = 2
69 > 1
[4, 42, 1, 69, 7, 389]

i = 3
69 > 7
[4, 42, 1, 7, 69, 389]

3 ===  4 - 1
i = 0
j = 3

--------------------
[4, 42, 1, 7, 69, 389]
i = 1
42 > 1
[4, 1, 42, 7, 69, 389]

i = 2
42 > 7
[4, 1, 7, 42, 69, 389]


2 = 3 - 1
i = 0
j = 2


-----------------------
[4, 1, 7, 42, 69, 389]


*/
