import { MaxHeap } from "./Heap";

describe("MaxHeap", () => {
  let heap = new MaxHeap();
  expect(heap.length).toBe(0);
  heap.insert(1);
  expect(heap.length).toBe(1);
  heap.insert(2);
  expect(heap.length).toBe(2);
  heap.insert(3);
  expect(heap.length).toBe(3);
  heap.insert(4);
  expect(heap.length).toBe(4);
  heap.insert(5);
  expect(heap.length).toBe(5);

  heap.debug();

  test("constructor", () => {
    const heap = new MaxHeap([1, 2, 3, 4, 5]);
    expect(heap.data).toEqual([5, 4, 2, 1, 3]);
    expect(heap.length).toBe(5);
  });

  test("isMaxHeap", () => {
    expect(heap.data).toEqual([5, 4, 2, 1, 3]);
    expect(MaxHeap.isMaxHeap(heap.data)).toBe(true);
  });

  test("pop", () => {
    expect(heap.pop()).toEqual(5);
    expect(heap.length).toBe(4);
    expect(heap.pop()).toEqual(4);
    expect(heap.length).toBe(3);
    heap.insert(6);
    expect(heap.length).toBe(4);
    expect(heap.pop()).toEqual(6);
    heap.debug();
    expect(heap.length).toBe(3);
    expect(heap.pop()).toEqual(3);
    expect(heap.length).toBe(2);
    expect(heap.pop()).toEqual(2);
    expect(heap.length).toBe(1);
    expect(heap.pop()).toEqual(1);
    expect(heap.length).toBe(0);
    expect(heap.pop()).toEqual(undefined);
  });

  test("sort", () => {
    const nums = [10, 20, 15, 7, 18];
    const sorted = MaxHeap.sort(nums);
    expect(sorted).toEqual([7, 10, 15, 18, 20]);
  });
});
