import { DoublyLinkedList } from "../LinkedLists/DoublyLinkedList";
import { Stack } from "./ArrayStack";

export class LinkedListStack<T> implements Stack<T> {
  #list: DoublyLinkedList<T>;

  constructor() {
    this.#list = new DoublyLinkedList();
  }

  push(data: T): void {
    this.#list.addLast(data);
  }

  pop(): T | undefined {
    return this.#list.removeLast();
  }

  get size() {
    return this.#list.size;
  }

  debug() {
    this.#list.printInOrder();
  }
}
