package main

import "fmt"

func removeDuplicates(nums []int) int {
	write_pointer := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[i-1] {
			nums[write_pointer] = nums[i]
			write_pointer++
		}
	}

	return write_pointer
}

func main() {
	uniqueNums := removeDuplicates([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4})
	fmt.Println(uniqueNums)
}

// 1,2
// 0,1,2,3,4
//  0,0,1,1,1,2,2,3,3,4
