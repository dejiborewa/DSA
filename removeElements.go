package main

import "fmt"

func removeElement(nums []int, val int) int {
	var write_pointer int

	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[write_pointer] = nums[i]
			write_pointer++
		}
	}

	return write_pointer
}

func main() {
	k := removeElement([]int{0, 1, 2, 2, 3, 0, 4, 2, 2, 6, 2, 2, 2, 2, 2, 7, 2}, 2)
	fmt.Println(k)
}
