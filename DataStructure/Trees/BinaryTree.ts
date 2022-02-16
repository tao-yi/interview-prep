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

  static inOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    if (!node) return;
    TreeNode.inOrder(node.#left, cb);
    cb(node.#data);
    TreeNode.inOrder(node.#right, cb);
  }

  static preOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    if (!node) return;
    cb(node.#data);
    TreeNode.preOrder(node.#left, cb);
    TreeNode.preOrder(node.#right, cb);
  }

  static postOrder<T>(node: TreeNode<T> | undefined, cb: NodeHandler<T>) {
    if (!node) return;
    TreeNode.postOrder(node.#left, cb);
    TreeNode.postOrder(node.#right, cb);
    cb(node.#data);
  }
}
