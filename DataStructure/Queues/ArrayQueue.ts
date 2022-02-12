export interface Queue<T> {
  enqueue(data: T): void;
  dequeue(): T | undefined;
}

export class ArrayQueue<T> implements Queue<T> {
  #array: T[];
  // track the first element in the queue
  #front: number;
  // track the last element in the queue
  #rear: number;
  #capacity: number;

  constructor(capacity: number) {
    this.#array = [];
    this.#front = -1;
    this.#rear = -1;
    this.#capacity = capacity;
  }

  debug(prefix?: string) {
    console.log(
      prefix || "[info]",
      this.#array,
      `(front:${this.#front} rear:${this.#rear} size:${this.size})`,
    );
  }

  get capacity() {
    return this.#capacity;
  }

  // O(1)
  get size() {
    if (this.isEmpty()) return 0;
    if (this.#rear === this.#front) return 1;
    if (this.#rear > this.#front) {
      return this.#rear - this.#front + 1;
    }
    // if cyclical case，size = #rear + 1 + (#capacity - #front)
    return this.#capacity - this.#front + this.#rear + 1;
  }

  // O(1)
  isFull() {
    return this.size === this.#capacity;
  }

  // O(1)
  // #front === -1 or #rear === -1
  isEmpty() {
    return this.#front === -1;
  }

  // O(1)
  enqueue(data: T): void {
    // if is empty
    if (this.isEmpty()) {
      this.#front = 0;
      this.#rear = 0;
      this.#array[0] = data;
      return;
    }
    // if is full
    if (this.size + 1 > this.#capacity) {
      throw new Error(`exceed max capacity ${this.#capacity})`);
    }
    // if normal case
    if (this.#rear >= this.#front) {
      this.#array[++this.#rear] = data;
      return;
    }

    // cyclical
    this.#rear = (this.#rear + 1) % this.#capacity;
    this.#array[this.#rear] = data;
  }

  // O(1)
  dequeue(): T | undefined {
    // normal case
    if (this.#front < this.#rear) {
      return this.#array[this.#front++];
    }
    // single element
    if (this.#front === this.#rear) {
      const item = this.#array[this.#front];
      this.#front = -1;
      this.#rear = -1;
      return item;
    }
    // rear < front
    // if exceeding capacity
    if (this.#front + 1 >= this.#capacity) {
      const item = this.#array[this.#front];
      this.#front = 0;
      return item;
    }
    return this.#array[this.#front++];
  }
}
