class TrieNode {
  #data: string;
  #children: TrieNode[];
  isEnd: boolean;

  // 假设只保存26个英文字母
  constructor(data: string = "") {
    this.#children = new Array(26);
    this.isEnd = false;
    this.#data = data;
  }

  get children() {
    return this.#children;
  }

  get data() {
    return this.#data;
  }
}

export class Trie {
  #root: TrieNode;

  constructor() {
    this.#root = new TrieNode();
  }

  public insert(word: string) {
    word = word.toLowerCase();
    let node = this.#root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      if (node.children[index] === undefined) {
        node.children[index] = new TrieNode(word.charAt(i));
      }
      node = node.children[index];
    }
    node.isEnd = true;
  }

  public delete(word: string) {
    let node = this.#root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      if (node.children[index] === undefined) return;
      node = node.children[index];
      console.log(node.data);
    }
    if (node) {
      node.isEnd = false;
    }
  }

  public contains(word: string) {
    let node = this.#root;
    for (let i = 0; i < word.length; i++) {
      const index = word.charCodeAt(i) - 97;
      if (node.children[index] === undefined) return false;
      node = node.children[index];
    }
    return node.isEnd;
  }

  public startsWith(prefix: string) {
    let node = this.#root;
    for (let i = 0; i < prefix.length; i++) {
      const index = prefix.charCodeAt(i) - 97;
      if (node.children[index] === undefined) return false;
      node = node.children[index];
    }
    return node !== undefined;
  }
}
