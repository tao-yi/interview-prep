export interface Stack<T> {
  // add element into stack
  push(data: T): void;
  // remove element from stack
  pop(): T | undefined;
}

export class ArrayStack<T> implements Stack<T> {
  #array: T[];
  // used to track the top element in the stack
  #top: number;
  #capacity: number;

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error("capacity must > 0 ");
    this.#array = [];
    this.#top = -1;
    this.#capacity = capacity;
  }

  debug() {
    console.log(this.#array, this.#top);
  }

  private isFull() {
    return this.#top + 1 >= this.#capacity;
  }

  private isEmpty() {
    return this.#top === -1;
  }

  get capacity() {
    return this.#capacity;
  }

  get size() {
    return this.#top + 1;
  }

  // arr = [], top = -1
  push(data: T) {
    if (this.isFull()) throw new Error("stack is full");
    this.#array[++this.#top] = data;
  }

  // arr = [1], top = 0
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.#array[this.#top--];
  }
}
