// 单向链表节点
class SllNode<T> {
  public data: T;
  public next: SllNode<T> | undefined;

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
  }
}

interface LinkedList<T> {
  addFirst(data: T): void;
  addLast(data: T): void;
  removeFirst(): void;
  removeLast(): void;
  contains(data: T): boolean;
  remove(data: T): void;
}

/**
 * Boundary Conditions:
 * 1. 如果List是空的
 * 2. 如果List有一个元素
 * 3. 从List头部插入
 * 4. 从List尾部插入
 * 5. 从List中间插入
 */
export class SinglyLinkedList<T> implements LinkedList<T> {
  #head: SllNode<T> | undefined;
  #tail: SllNode<T> | undefined;
  #size: number;

  constructor() {
    this.#head = undefined;
    this.#tail = undefined;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head?.data;
  }

  get tail() {
    return this.#tail?.data;
  }

  public debug() {
    let cur = this.#head;
    let s = "head -> ";
    while (cur) {
      s += `${cur.data} -> `;
      cur = cur.next;
    }
    s += "undefined";
    console.log(s);
  }

  // O(1)
  public addFirst(data: T) {
    const node = new SllNode(data);
    this.#size++;
    if (!this.#head) {
      this.#tail = node;
      this.#head = node;
      return;
    }
    node.next = this.#head;
    this.#head = node;
  }

  // O(1)
  public addLast(data: T) {
    const node = new SllNode(data);
    this.#size++;
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      return;
    }
    this.#tail!.next = node;
    this.#tail = node;
  }

  // O(1)
  public removeFirst() {
    if (this.#size === 0) return;
    // 如果只有一个元素
    if (this.#head === this.#tail) {
      this.#head = undefined;
      this.#tail = undefined;
      this.#size--;
      return;
    }
    const tmp = this.#head?.data;
    this.#head = this.#head!.next;
    this.#size--;
    return tmp;
  }

  // O(n)
  public removeLast() {
    // find second last item
    let ptr = this.#head;
    if (!ptr) return;
    if (this.#head === this.#tail) {
      const tmp = this.#head?.data;
      this.#head = undefined;
      this.#tail = undefined;
      this.#size--;
      return tmp;
    }
    while (ptr.next && ptr.next.next) {
      ptr = ptr.next;
    }
    const tmp = ptr.next!.data;
    ptr.next = undefined;
    this.#tail = ptr;
    this.#size--;
    return tmp;
  }

  // O(n)
  public contains(data: T) {
    let cur = this.#head;
    while (cur) {
      if (cur.data === data) return true;
      cur = cur.next;
    }
    return false;
  }

  // O(n)
  public remove(data: T) {
    let cur = this.#head;
    let prev: SllNode<T> | undefined = undefined;
    while (cur) {
      if (cur.data === data) {
        if (cur == this.#head) {
          return this.removeFirst();
        }
        if (cur == this.#tail) {
          return this.removeLast();
        }
        this.#size--;
        prev!.next = cur.next;
        return cur.data;
      }
      prev = cur;
      cur = cur.next;
    }
    return undefined;
  }

  [Symbol.iterator]() {
    let cur = this.#head;
    return {
      next: () => {
        if (cur) {
          const output = { value: cur.data, done: false };
          cur = cur.next;
          return output;
        }
        return { value: undefined, done: true };
      },
    };
  }
}
