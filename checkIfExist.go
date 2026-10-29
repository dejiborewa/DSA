// Given an array arr of integers, check if there exist two indices i and j such that :
//
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
//
//
// Example 1:
//
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
//
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

package main

import "fmt"

func checkIfExist(arr []int) bool {
	var possible int

	for i := 0; i < len(arr); i++ {
		if arr[i] % 2 {
			possible = arr[i] / 2
		}
	}
}

func main() {
	arr := checkIfExist([]int{10, 2, 5, 3})
	arr2 := checkIfExist([]int{3, 1, 7, 11})
	arr3 := checkIfExist([]int{7, 15, 3, 4, 30})
	arr4 := checkIfExist([]int{7, 2, 9, 4, 31})
	fmt.Println(arr, arr2, arr3, arr4)
}
// 5, 1, 2.5, 1.5 [10, 2, 5, 3]  // 0, 2
// 3.5, 7.5, 15
