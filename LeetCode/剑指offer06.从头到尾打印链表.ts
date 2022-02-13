class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversePrint(head: ListNode | null): number[] {
  const arr: number[] = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  return arr;
}

function recursive(head: ListNode | null): number[] {
  if (!head) return [];
  const arr = recursive(head.next);
  arr.push(head.val);
  return arr;
}
