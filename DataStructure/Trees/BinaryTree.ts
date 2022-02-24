export type NodeHandler<T = any> = (data: T | undefined) => any;

export class TreeNode<T = any> {
  #left?: TreeNode<T>;
  #right?: TreeNode<T>;
  #data?: T;

  constructor(data: T) {
    this.#data = data;
  }

  setLeft(node: TreeNode<T>) {
    this.#left = node;
    return this;
  }

  setRight(node: TreeNode<T>) {
    this.#right = node;
    return this;
  }

  get data() {
    return this.#data;
  }

  get leftChild() {
    return this.#left;
  }

  get rightChild() {
    return this.#right;
  }

  // implementation using call stack
  // static inOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
  //   if (!node) return;
  //   TreeNode.inOrder(node.#left, cb);
  //   cb(node.#data);
  //   TreeNode.inOrder(node.#right, cb);
  // }

  // static preOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
  //   if (!node) return;
  //   cb(node.#data);
  //   TreeNode.preOrder(node.#left, cb);
  //   TreeNode.preOrder(node.#right, cb);
  // }

  // static postOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
  //   if (!node) return;
  //   TreeNode.postOrder(node.#left, cb);
  //   TreeNode.postOrder(node.#right, cb);
  //   cb(node.#data);
  // }

  // implementation using our own stack
  static inOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    const stack: TreeNode[] = [];
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.leftChild;
      }
      const current = stack.pop();
      cb(current!.data);
      node = current?.rightChild;
    }
  }

  static preOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    if (!node) return;
    const stack: TreeNode[] = [node];
    while (stack.length) {
      const node = stack.pop();
      cb(node!.data);
      if (node!.rightChild) stack.push(node!.rightChild);
      if (node!.leftChild) stack.push(node!.leftChild);
    }
  }

  static postOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    if (!node) return;
    const stack: TreeNode[] = [node];
    const array: T[] = [];
    while (stack.length) {
      const node = stack.pop()!;
      array.push(node.data);
      if (node.leftChild) stack.push(node.leftChild);
      if (node.rightChild) stack.push(node.rightChild);
    }
    array.reverse().forEach((data) => cb(data));
  }
}
