/**
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 */

import { ListNode } from "./剑指offer06.从头到尾打印链表";

/**
双指针法
1->2->3

head = 1
prev = null

while (head) { // head = 1
  // 暂存head.next到一个数组, 因为需要修改head.next指向prev
  const tmp = head.next // 2
  head.next = tmp  // 1 -> null
  prev = head      // prev = 1
  head = hext.next // head = 2
}

// 循环结束，此时head = null, prev = tail元素
return prev

*/

function reverseListPtr(head: ListNode | null) {
  let prev: ListNode | null = null;
  while (head) {
    const tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }
  return prev;
}
