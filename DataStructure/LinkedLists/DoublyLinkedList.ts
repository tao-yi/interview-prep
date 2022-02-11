import { LinkedList } from "./SinglyLinkedList";

// 单向链表节点
class DllNode<T> {
  public data: T;
  public next: DllNode<T> | undefined;
  public prev: DllNode<T> | undefined;

  constructor(data: T) {
    this.data = data;
    this.next = undefined;
    this.prev = undefined;
  }

  addAfter(data: T) {
    const node = new DllNode(data);
    node.next = this.next;
    node.prev = this;
    this.next = node;
    if (node.next) {
      node.next.prev = node;
    }
  }

  addBefore(data: T) {
    const node = new DllNode(data);
    node.next = this;
    node.prev = this.prev;
    this.prev = node;
    if (node.prev) {
      node.prev.next = node;
    }
  }

  debug() {
    console.log(`Node{${this.next?.data}, ${this.data}, ${this.prev?.data}}`);
  }
}

/**
 * Boundary Conditions:
 * 1. 如果List是空的
 * 2. 如果List有一个元素
 * 3. 从List头部插入
 * 4. 从List尾部插入
 * 5. 从List中间插入
 */
export class DoublyLinkedList<T> implements LinkedList<T> {
  #head: DllNode<T> | undefined;
  #tail: DllNode<T> | undefined;
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

  public printInOrder() {
    let cur = this.#head;
    let s = "head <-> ";
    while (cur) {
      s += `${cur.data} <-> `;
      cur = cur.next;
    }
    s += "undefined";
    console.log(s);
  }

  public printPostOrder() {
    let cur = this.#tail;
    let s = "tail <-> ";
    while (cur) {
      s += `${cur.data} <-> `;
      cur = cur.prev;
    }
    s += "head";
    console.log(s);
  }

  // O(1)
  public addFirst(data: T) {
    const node = new DllNode(data);
    this.#size++;
    if (!this.#head) {
      this.#tail = node;
      this.#head = node;
      return;
    }
    node.next = this.#head;
    this.#head.prev = node;
    this.#head = node;
  }

  // O(1)
  public addLast(data: T) {
    const node = new DllNode(data);
    this.#size++;
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      return;
    }
    node.prev = this.#tail;
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

  // O(1)
  public removeLast() {
    if (!this.#tail) {
      return;
    }
    this.#size--;
    if (this.#head === this.#tail) {
      const data = this.#head.data;
      this.#head = undefined;
      this.#tail = undefined;
      return data;
    }
    const data = this.#tail.data;
    this.#tail = this.#tail.prev;
    this.#tail!.next = undefined;
    return data;
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
    let prev: DllNode<T> | undefined = undefined;
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
          const output = { value: cur, done: false };
          cur = cur.next;
          return output;
        }
        return { value: undefined, done: true };
      },
    };
  }
}
