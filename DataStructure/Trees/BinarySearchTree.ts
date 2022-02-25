export class BSTNode {
  data: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  public static add(data: number, node: BSTNode) {
    if (data <= node.data) {
      // go to left
      if (node.left === null) {
        node.left = new BSTNode(data);
        return;
      }
      return BSTNode.add(data, node.left);
    }
    // go to right
    if (node.right === null) {
      node.right = new BSTNode(data);
      return;
    }
    return BSTNode.add(data, node.right);
  }
}

export class BinarySearchTree {
  #root: BSTNode;
  #length: number;

  constructor(data: number) {
    this.#root = new BSTNode(data);
    this.#length = 1;
  }

  get length() {
    return this.#length;
  }

  get root() {
    return this.#root;
  }

  public insert(data: number) {
    BSTNode.add(data, this.#root);
    this.#length++;
  }

  public contains(data: number) {
    let node: BSTNode | null = this.#root;
    while (node) {
      if (node.data === data) return true;
      else if (node.data < data) node = node.right;
      else node = node.left;
    }
    return false;
  }

  debug() {
    console.log(JSON.stringify(this.#root));
  }

  public static isValid(root: BSTNode) {
    return BinarySearchTree.isInRange(
      root,
      -Number.MAX_VALUE,
      Number.MAX_VALUE,
    );
  }

  private static isInRange(root: BSTNode | null, min: number, max: number) {
    if (!root) return true;
    if (
      root.data > min &&
      root.data <= max &&
      BinarySearchTree.isInRange(root.left, min, root.data) &&
      BinarySearchTree.isInRange(root.right, root.data, max)
    ) {
      return true;
    }

    return false;
  }
}
