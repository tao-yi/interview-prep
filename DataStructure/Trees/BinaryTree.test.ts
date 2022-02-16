import { TreeNode } from "./BinaryTree";

describe("TreeNode", () => {
  //        1
  //    12     9
  //  5    6
  const root = new TreeNode(1);
  const n1 = new TreeNode(12);
  const n4 = new TreeNode(9);
  n1.setLeft(new TreeNode(5)).setRight(new TreeNode(6));
  root.setLeft(n1).setRight(n4);

  test("inorder", () => {
    const handler = (data) => output.push(data);
    const output: number[] = [];
    TreeNode.inOrder(root, handler);
    expect(output).toEqual([5, 12, 6, 1, 9]);
  });

  test("postorder", () => {
    const handler = (data) => output.push(data);
    const output: number[] = [];
    TreeNode.postOrder(root, handler);
    expect(output).toEqual([5, 6, 12, 9, 1]);
  });

  test("preorder", () => {
    const handler = (data) => output.push(data);
    const output: number[] = [];
    TreeNode.preOrder(root, handler);
    expect(output).toEqual([1, 12, 5, 6, 9]);
  });
});
