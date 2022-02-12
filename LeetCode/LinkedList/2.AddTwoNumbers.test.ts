import { addTwoNumbers, ListNode } from "./2.AddTwoNumbers";

function makeList(arr: number[]) {
  if (!arr.length) return null;
  const tmpHead = new ListNode();
  let prev = tmpHead;
  for (let i = 0; i < arr.length; i++) {
    const newNode = new ListNode(arr[i]);
    prev.next = newNode;
    prev = newNode;
  }
  return tmpHead.next;
}

describe("AddTwoNumbers", () => {
  test("l1 = [2,4,3], l2 = [5,6,4]", () => {
    // 342 + 465 = 708
    const l1 = makeList([2, 4, 3]);
    const l2 = makeList([5, 6, 4]);
    const ou = makeList([7, 0, 8]);
    const value = addTwoNumbers(l1, l2);
    expect(ou?.toArray()).toEqual(value?.toArray());
  });

  test("l1 = [0], l2 = [0]", () => {
    const l1 = makeList([0]);
    const l2 = makeList([0]);
    const ou = makeList([0]);
    expect(addTwoNumbers(l1, l2)?.toArray()).toEqual(ou?.toArray());
  });

  test("l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", () => {
    const l1 = makeList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = makeList([9, 9, 9, 9]);
    const ou = makeList([8, 9, 9, 9, 0, 0, 0, 1]);
    expect(ou?.toArray()).toEqual(addTwoNumbers(l1, l2)?.toArray());
  });
});
