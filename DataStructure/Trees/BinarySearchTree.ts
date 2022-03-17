export class BSTNode {
  data: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  public serialize() {
    const queue: Array<BSTNode | null> = [this];
    const res: Array<Array<number | null>> = [];
    while (queue.length) {
      const width = queue.length;
      const level: Array<number | null> = [];
      for (let i = 0; i < width; i++) {
        const node = queue.shift()!;
        level.push(node ? node.data : null);
        node && queue.push(node.left);
        node && queue.push(node.right);
      }
      res.push(level);
    }
    return res;
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

  public static isValid(root: BSTNode) {
    return BinarySearchTree.isInRange(
      root,
      -Number.MAX_VALUE,
      Number.MAX_VALUE,
    );
  }

  get height() {
    return this.getHeight(this.#root);
  }

  private getHeight(root: BSTNode | null) {
    if (root === null) return 0;
    return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
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
