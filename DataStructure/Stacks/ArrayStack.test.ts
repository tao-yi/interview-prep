import { ArrayStack } from "./ArrayStack";

describe("ArrayStack", () => {
  let stack: ArrayStack<number>;

  test("constructor", () => {
    //
    stack = new ArrayStack(3);
    const output = stack.pop();
    expect(output).toBe(undefined);
    expect(stack.size).toBe(0);
    expect(stack.capacity).toBe(3);
  });

  test("push", () => {
    stack = new ArrayStack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.debug();
    expect(stack.size).toBe(3);
    expect(stack.capacity).toBe(3);
    stack.debug();

    expect(() => {
      stack.push(4);
    }).toThrowError("stack is full");
  });

  test("pop", () => {
    stack = new ArrayStack(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.debug();

    let num = stack.pop();
    expect(num).toBe(3);
    num = stack.pop();
    expect(num).toBe(2);
    num = stack.pop();
    expect(num).toBe(1);
    num = stack.pop();
    expect(num).toBe(undefined);

    stack.push(4);
    stack.push(5);
    num = stack.pop();
    expect(num).toBe(5);
    stack.push(6);
    stack.push(7);
    num = stack.pop();
    expect(num).toBe(7);
    num = stack.pop();
    expect(num).toBe(6);
    stack.debug();
    stack.push(9);
    stack.debug();
    stack.push(19);
    stack.debug();
  });
});
