package main

import (
	"fmt"
	"sync"
)

type singleton struct {
}

var instance *singleton

var mutex sync.Mutex

// 每次获取instance都会加锁，加锁是一个非常耗资源的操作，应该尽量避免
func GetInstance() *singleton {
	mutex.Lock()
	defer mutex.Unlock()

	if instance == nil {
		instance = &singleton{}
	}

	return instance
}

// 当首次创建成功后，后续获取实例都不会加锁了
func GetInstanceV2() *singleton {
	if instance != nil {
		return instance
	}

	mutex.Lock()
	defer mutex.Unlock()
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
			s1 = GetInstanceV2()
		}()
	}

	fmt.Println(s1 == s2)
}
