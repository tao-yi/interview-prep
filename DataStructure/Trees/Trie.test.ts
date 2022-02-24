import { Trie } from "./Trie";

describe("Trie", () => {
  test("insert", () => {
    const trie = new Trie();
    let word = "abc";
    trie.insert(word);
    expect(trie.contains(word)).toBe(true);
    word = "abcd";
    expect(trie.contains(word)).toBe(false);
    trie.insert(word);
    expect(trie.contains(word)).toBe(true);

    word = "ab";
    expect(trie.contains(word)).toBe(false);
    trie.insert(word);
    expect(trie.contains(word)).toBe(true);

    word = "a";
    expect(trie.contains(word)).toBe(false);
  });

  test("insert", () => {
    const trie = new Trie();
    let word = "abc";
    trie.insert(word);
    expect(trie.startsWith("a")).toBe(true);
    expect(trie.startsWith("ab")).toBe(true);
    expect(trie.startsWith("b")).toBe(false);
    expect(trie.startsWith("c")).toBe(false);
  });

  test("delete", () => {
    const trie = new Trie();
    let word = "abc";
    trie.delete(word);
    trie.insert(word);
    expect(trie.contains("abc")).toBe(true);
    trie.delete(word);
    expect(trie.contains("abc")).toBe(false);
    trie.insert(word);
    expect(trie.contains("abc")).toBe(true);
  });
});
