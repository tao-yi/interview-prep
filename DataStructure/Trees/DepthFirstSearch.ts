import { NodeHandler, TreeNode } from "./BinaryTree";

/**
[1,12,5,6,9,7,8]

stack = [1]
pop    1    push 9,12 -> [9,12]
pop    12   push 6,5  -> [9,6,5]
pop    5              -> [9,6]
pop    6              -> [9]
pop    9    push 8,7  -> [8,7]
pop    8              -> [7]
pop    7              -> []

*/

export function DepthFirstSearch(root: TreeNode, cb: NodeHandler) {
  const stack = [root];
  while (stack.length > 0) {
    const item = stack.pop()!;
    cb(item);
    if (item.rightChild) stack.push(item.rightChild);
    if (item.leftChild) stack.push(item.leftChild);
  }
}
