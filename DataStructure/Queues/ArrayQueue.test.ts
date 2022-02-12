import { ArrayQueue } from "./ArrayQueue";

describe("ArrayQueue", () => {
  let queue: ArrayQueue<number>;

  test("constructor", () => {
    queue = new ArrayQueue(3);
    expect(queue.capacity).toBe(3);
  });

  test("enqueue", () => {
    queue = new ArrayQueue(3);
    expect(queue.size).toBe(0);
    queue.enqueue(1);
    expect(queue.size).toBe(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
    queue.debug();

    expect(() => {
      queue.enqueue(4);
    }).toThrowError();
  });

  test("dequeue", () => {
    queue = new ArrayQueue(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    let out = queue.dequeue();
    expect(out).toBe(1);
    expect(queue.size).toBe(2);
    out = queue.dequeue();
    expect(out).toBe(2);
    expect(queue.size).toBe(1);
    out = queue.dequeue();
    expect(out).toBe(3);
    expect(queue.size).toBe(0);
    queue.debug();
  });

  test("dequeue & enqueue", () => {
    queue = new ArrayQueue(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.debug(); // 1,[2,3,4]

    queue.enqueue(5);
    queue.dequeue();
    queue.debug(); // 1,2,[3,4,5]
    queue.enqueue(6);
    queue.enqueue(7);
    queue.debug(); // 6,7],[3,4,5
    expect(() => queue.enqueue(8)).toThrowError();
    expect(queue.isFull()).toBe(true);
    expect(queue.size).toBe(5);

    let out = queue.dequeue();
    expect(out).toBe(3);
    out = queue.dequeue();
    expect(out).toBe(4);
    out = queue.dequeue();
    expect(out).toBe(5);
    out = queue.dequeue();
    expect(out).toBe(6);
    out = queue.dequeue();
    expect(out).toBe(7);
    expect(queue.size).toBe(0);
    expect(queue.capacity).toBe(5);
  });
});
