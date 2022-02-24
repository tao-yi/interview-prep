package main

import "fmt"

// AlphabetSize is the number of possible characters in the trie
const AlphabetSize = 26

// Node
type Node struct {
	children [26]*Node
	isEnd    bool
}

// Trie
type trie struct {
	root *Node
}

func New() *trie {
	return &trie{root: &Node{}}
}

// Insert
func (t *trie) Insert(word string) {
	wordLength := len(word)
	currentNode := t.root
	for i := 0; i < wordLength; i++ {
		charIndex := word[i] - 'a'
		if currentNode.children[charIndex] == nil {
			currentNode.children[charIndex] = &Node{}
		}
		currentNode = currentNode.children[charIndex]
	}
	currentNode.isEnd = true
}

// Search
func (t *trie) Search(word string) bool {
	wordLength := len(word)
	currentNode := t.root
	for i := 0; i < wordLength; i++ {
		charIndex := word[i] - 'a'
		if currentNode.children[charIndex] == nil {
			return false
		}
		currentNode = currentNode.children[charIndex]
	}
	return currentNode.isEnd == true
}

func main() {
	trie := New()
	trie.Insert("abcd")
	fmt.Println(trie.Search("ab"))
	fmt.Println(trie.Search("abc"))
	fmt.Println(trie.Search("abcd"))
}
