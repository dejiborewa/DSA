package main

import (
	"fmt"
)

func merge(nums1 []int, m int, nums2 []int, n int) {
	p1 := m - 1
	p2 := n - 1
	k := m + n - 1

	for p2 >= 0 {
		fmt.Println(p2)
		if p1 >= 0 && nums1[p1] > nums2[p2] {
			nums1[k] = nums1[p1]
			p1--
		} else {
			nums1[k] = nums2[p2]
			p2--
		}
		k--
		fmt.Println(p2)
		fmt.Println(nums1)
	}
}

func main() {
	merge([]int{1, 2, 3, 0, 0, 0}, 3, []int{2, 5, 6}, 3)
	merge([]int{4, 5, 6, 0, 0, 0}, 3, []int{1, 2, 3}, 3)
	merge([]int{0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0}, 5, []int{-1, 1, 1, 1, 2, 3}, 6)
	merge([]int{0}, 0, []int{1}, 1)
	merge([]int{1}, 1, []int{}, 0)
}


// func merge(nums1 []int, m int, nums2 []int, n int) {
// 	current_highest_pointer := m - 1
// 	nums1_pointer := m + n - 1
// 	nums2_pointer := n - 1
//
// 	if m == 0 {
// 		for i := range n {
// 			nums1[i] = nums2[i]
// 		}
// 	}
//
// 	if n == 0 {
// 		for i := range m {
// 			nums1[i] = nums1[i]
// 		}
// 	}
//
//
// 	for range m + n {
// 		if nums2[nums2_pointer] >= nums1[current_highest_pointer] {
// 			nums1[nums1_pointer] = nums2[nums2_pointer]
// 			nums2_pointer--
// 		} else {
// 			nums1[nums1_pointer] = nums1[current_highest_pointer]
//
// 			if current_highest_pointer > 0 {
// 				current_highest_pointer--
// 			}
// 		}
//
// 		nums1_pointer--
// 	}
// }
