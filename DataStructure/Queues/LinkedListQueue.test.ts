import { LinkedListQueue } from "./LinkedListQueue";

describe("LinkedListQueue", () => {
  let queue: LinkedListQueue<number>;

  test("constructor", () => {
    queue = new LinkedListQueue();
    queue.debug();
  });

  test("enqueue", () => {
    queue = new LinkedListQueue();
    expect(queue.size).toBe(0);
    queue.enqueue(1);
    expect(queue.size).toBe(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
  });

  test("dequeue", () => {
    queue = new LinkedListQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.debug();
    let out = queue.dequeue();
    expect(out).toBe(1);
    expect(queue.size).toBe(2);
    out = queue.dequeue();
    expect(out).toBe(2);
    expect(queue.size).toBe(1);
    queue.debug();
    out = queue.dequeue();
    expect(out).toBe(3);
    expect(queue.size).toBe(0);
    queue.debug();
  });

  test("dequeue & enqueue", () => {
    queue = new LinkedListQueue();
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
  });
});
