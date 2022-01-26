package main

import (
	"fmt"
	"sync"
)

type singleton struct{}

var instance *singleton
var once sync.Once

// if once.Do(f) is called multiple times,
// only the first call will invoke f,
// even if f has a different value in each invocation.
func GetInstance() *singleton {
	once.Do(func() {
		fmt.Println("creating instance")
		instance = &singleton{}
	})

	return instance
}

func main() {
	var s1 *singleton
	var s2 *singleton
	for i := 0; i < 100000; i++ {
		go func() {
			s1 = GetInstance()
		}()
		go func() {
			s2 = GetInstance()
		}()
	}

	fmt.Println(s1 == s2)
}
