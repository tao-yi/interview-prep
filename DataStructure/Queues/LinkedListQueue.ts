import { DoublyLinkedList } from "../LinkedLists/DoublyLinkedList";
import { Queue } from "./ArrayQueue";

export class LinkedListQueue<T> implements Queue<T> {
  #list: DoublyLinkedList<T>;

  constructor() {
    this.#list = new DoublyLinkedList();
  }

  get size() {
    return this.#list.size;
  }

  debug() {
    this.#list.printInOrder();
  }

  enqueue(data: T): void {
    return this.#list.addLast(data);
  }

  dequeue(): T | undefined {
    return this.#list.removeFirst();
  }
}
