package main

import "fmt"

type void struct{}

func findDuplicate(arr []int) *int {
	// more memory efficient than map[int]bool
	set := make(map[int]void)

	for _, num := range arr {
		_, ok := set[num]
		if ok {
			return &num
		}
		set[num] = void{}
	}

	return nil
}

func main() {
	input := []int{2, 3, 1, 0, 2, 5, 3}
	output := findDuplicate(input)
	if output != nil {
		fmt.Println(*output)
	} else {
		fmt.Println("nil")
	}
}
