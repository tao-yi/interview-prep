/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toArray() {
    let node: ListNode = this;
    const output = [node.val];
    while (node.next) {
      node = node.next;
      output.push(node.val);
    }
    return output;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0; // indicate if ptr1.val + ptr2.val >= 10
  const tmpHead = new ListNode();
  let prev = tmpHead;
  while (l1 || l2 || carry) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const sum = l1Val + l2Val + carry;
    carry = Math.floor(sum / 10);
    prev.next = new ListNode(sum % 10);
    prev = prev.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return tmpHead.next;
}
