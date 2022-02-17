interface Heap {
  // O(log(n))
  pop();
  // O(1)
  peek();
  // O(log(n))
  insert(data: any);
}

export class MaxHeap implements Heap {
  #array: number[] = [];
  #length: number = 0;

  constructor(array?: number[]) {
    if (array) {
      array.forEach((num) => this.insert(num));
    }
  }

  pop() {
    if (this.#length === 0) return undefined;
    const item = this.#array[0];
    // swap first with last element
    this.swap(0, --this.#length);
    // heapify up
    this.heapifyDown();
    return item;
  }

  private swap(i: number, j: number) {
    if (i === j) return;
    const tmp = this.#array[i];
    this.#array[i] = this.#array[j];
    this.#array[j] = tmp;
  }

  private heapifyDown() {
    let pos = 0;
    let l: number;
    let r: number;
    while (pos < this.#length) {
      l = pos * 2 + 1;
      r = pos * 2 + 2;
      if (r < this.#length) {
        if (this.#array[l] < this.#array[r]) {
          this.swap(pos, r);
          pos = r;
        } else {
          this.swap(pos, l);
          pos = l;
        }
      } else if (l < this.#length && this.#array[l] > this.#array[pos]) {
        this.swap(pos, l);
        pos = l;
      }
      break;
    }
  }

  private heapifyUp(pos: number) {
    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      if (this.#array[pos] > this.#array[parent]) {
        this.swap(pos, parent);
        pos = parent;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.#array[0];
  }

  insert(data: number) {
    if (this.#length < this.#array.length - 1) {
      this.#array[this.#length] = data;
    } else {
      this.#array.push(data);
    }
    this.#length++;
    this.heapifyUp(this.#length - 1);
  }

  static isMaxHeap(heap: number[]) {
    for (let i = 0; i < heap.length; i++) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      if (right < heap.length) {
        if (heap[i] < heap[right]) return false;
      }
      if (left < heap.length) {
        if (heap[i] < heap[left]) return false;
      }
    }

    return true;
  }

  // 1. create a heap
  // 2. delete all elements from a heap
  static sort(nums: number[]): number[] {
    const heap = new MaxHeap(nums);
    heap.debug();
    while (heap.#length > 0) {
      heap.pop();
    }
    return heap.data;
  }

  debug() {
    console.log(this.#array, this.#length);
  }

  get data() {
    return this.#array;
  }

  get length() {
    return this.#length;
  }
}
