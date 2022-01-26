package main

import "fmt"

type singleton struct{}

var instance *singleton

func GetInstance() *singleton {
	if instance == nil {
		fmt.Println("creating instance")
		instance = &singleton{}
	}
	return instance
}

func main() {
	var s1 *singleton
	var s2 *singleton

	for i := 0; i < 10000; i++ {
		go func() {
			s1 = GetInstance()
		}()
	}

	fmt.Println(s1 == s2)
}
