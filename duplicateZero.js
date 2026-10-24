// var duplicateZeros = function(arr) {
//    let i = 0;
//    const startingLength = arr.length
//
//    do {
//       if (arr[i] === 0) {
//          arr[i + 1] = 0
//          i = i + 2
//       } else {
//          i = i + 1
//       }
//    } while (i < startingLength)
//
//    return arr.slice(0, startingLength);
// };


var duplicateZeros = function(arr) {
    let zeros = 0;
    let n = arr.length;

    // Step 1: Find the number of zeros that will be included within the array bounds
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zeros++;
        }
    }

    // Step 2: Traverse backwards and copy elements to their new correct positions
    let i = n - 1;       // Pointer for the original array end
    let j = n + zeros - 1; // Pointer for the expanded end

    while (i >= 0) {
       // single write for non-zero
        if (j < n) {
            arr[j] = arr[i];
        }

        // double write for zero
        if (arr[i] === 0) {
            j--;
            if (j < n) {
                arr[j] = 0;
            }
        }

        i--;
        j--;
    }

    return arr
};


console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))

// [1, 0, 2, 3, 0, 4, 5, 0, X, X, X] => [1, 0, 0, 2, 3, 0, 0, 4]
// n = 8
// i = 7
// j = 8 + 3 - 1 => 10


// 7 >= 0 (true)
// if (10 < 8) (false)
// arr[7] === 0 (true)
// j-- => 9
// if (9 < 8)
// i-- => 6
// j-- => 8

// if (8 < 8) (false)
// arr[6] === 5 (skip)
// i-- => 5
// j-- => 7


// if (7 < 8) (true)
