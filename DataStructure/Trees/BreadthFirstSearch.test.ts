import { TreeNode } from "./BinaryTree";
import { BreadthFirstSearch } from "./BreadthFirstSearch";

describe("BreadthFirstSearch", () => {
  //        1
  //    12      9
  //  5    6  7   8
  const root = new TreeNode(1);
  const left = new TreeNode(12)
    .setLeft(new TreeNode(5))
    .setRight(new TreeNode(6));
  const right = new TreeNode(9)
    .setLeft(new TreeNode(7))
    .setRight(new TreeNode(8));
  root.setLeft(left).setRight(right);

  test("case1", () => {
    const output: number[] = [];
    // 1 12 9 5 6 7 8
    BreadthFirstSearch(root, (node: TreeNode<number>) =>
      output.push(node.data!),
    );
    expect(output).toEqual([1, 12, 9, 5, 6, 7, 8]);
  });
});
