import { NodeHandler, TreeNode } from "./BinaryTree";

export function BreadthFirstSearch(root: TreeNode, cb: NodeHandler) {
  //
  const queue = [root];
  while (queue.length > 0) {
    const item = queue.shift()!;
    cb(item);
    if (item.leftChild) queue.push(item.leftChild);
    if (item.rightChild) queue.push(item.rightChild);
  }
}
