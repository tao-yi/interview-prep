import { BinarySearchTree, BSTNode } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  test("add", () => {
    const tree = new BinarySearchTree(5);
    tree.insert(4);
    tree.insert(6);
    tree.insert(15);
    tree.insert(21);
    tree.insert(32);
    tree.debug();
    expect(BinarySearchTree.isValid(tree.root)).toBe(true);
    expect(tree.length).toBe(6);
  });

  test("isValid", () => {
    let root = new BSTNode(5);
    root.left = new BSTNode(6);
    root.right = new BSTNode(15);
    expect(BinarySearchTree.isValid(root)).toBe(false);

    root = new BSTNode(5);
    root.left = new BSTNode(4);
    root.right = new BSTNode(15);
    expect(BinarySearchTree.isValid(root)).toBe(true);
  });

  test("contains", () => {
    const tree = new BinarySearchTree(5);
    tree.insert(4);
    tree.insert(6);
    tree.insert(15);
    tree.insert(21);
    tree.insert(32);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(4)).toBe(true);
    expect(tree.contains(6)).toBe(true);
    expect(tree.contains(15)).toBe(true);
    expect(tree.contains(21)).toBe(true);
    expect(tree.contains(32)).toBe(true);

    expect(tree.contains(1)).toBe(false);
    expect(tree.contains(2)).toBe(false);
    expect(tree.contains(100)).toBe(false);
  });
});
