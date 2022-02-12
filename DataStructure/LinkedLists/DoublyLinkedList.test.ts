import { DoublyLinkedList } from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let list = new DoublyLinkedList<number>();

  afterEach(() => {
    list.printInOrder();
    list.printPostOrder();
  });

  test("constructor", () => {
    expect(list.size).toBe(0);
    expect(list.head).toBe(undefined);
    expect(list.tail).toBe(undefined);
  });

  test("addFirst", () => {
    list.addFirst(6);
    expect(list.size).toBe(1);
    expect(list.head).toBe(6);
    expect(list.tail).toBe(6);

    list.addFirst(5);
    expect(list.size).toBe(2);
    expect(list.head).toBe(5);
    expect(list.tail).toBe(6);

    list.addFirst(4);
    expect(list.size).toBe(3);
    expect(list.head).toBe(4);
    expect(list.tail).toBe(6);

    for (const n of list) {
      n?.debug();
    }
  });

  test("addLast", () => {
    list.addLast(7);
    expect(list.size).toBe(4);
    expect(list.head).toBe(4);
    expect(list.tail).toBe(7);

    list.addLast(8);
    expect(list.size).toBe(5);
    expect(list.head).toBe(4);
    expect(list.tail).toBe(8);

    list.addLast(9);
    expect(list.size).toBe(6);
    expect(list.head).toBe(4);
    expect(list.tail).toBe(9);
  });

  test("removeFirst", () => {
    let first = list.removeFirst();
    expect(list.size).toBe(5);
    expect(list.head).toBe(5);
    expect(list.tail).toBe(9);
    expect(first).toBe(4);

    first = list.removeFirst();
    expect(list.size).toBe(4);
    expect(list.head).toBe(6);
    expect(list.tail).toBe(9);
    expect(first).toBe(5);

    const singly = new DoublyLinkedList();
    singly.addLast(1);
    const tmp = singly.removeFirst();
    expect(tmp).toBe(1);
  });

  test("removeLast", () => {
    let last = list.removeLast();
    expect(list.size).toBe(3);
    expect(list.head).toBe(6);
    expect(list.tail).toBe(8);
    expect(last).toBe(9);

    last = list.removeLast();
    expect(list.size).toBe(2);
    expect(list.head).toBe(6);
    expect(list.tail).toBe(7);
    expect(last).toBe(8);

    last = list.removeLast();
    expect(list.size).toBe(1);
    expect(list.head).toBe(6);
    expect(list.tail).toBe(6);
    expect(last).toBe(7);

    last = list.removeLast();
    expect(list.size).toBe(0);
    expect(list.head).toBe(undefined);
    expect(list.tail).toBe(undefined);
    expect(last).toBe(6);
  });

  test("contains", () => {
    const list = new DoublyLinkedList();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);
    let answer = list.contains(1);
    expect(answer).toBe(true);
    answer = list.contains(10);
    expect(answer).toBe(false);
  });

  test("remove", () => {
    list = new DoublyLinkedList();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(3);
    list.addLast(4);
    list.addLast(4);
    list.addLast(5);

    let anwser = list.remove(3);
    expect(anwser).toBe(3);

    anwser = list.remove(15);
    expect(anwser).toBe(undefined);
  });

  test("iterator", () => {
    list = new DoublyLinkedList();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);
    // The Symbol.iterator method is called automatically by for..of.
    for (const data of list) {
      console.log(data?.data);
    }
  });
});
