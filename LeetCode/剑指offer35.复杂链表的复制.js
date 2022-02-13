/**
 * 
请实现 copyRandomList 函数，复制一个复杂链表。
在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random; // random可能指向任意一个节点
 * };
 */

const cache = new Map();
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  const copy = new Node(head.val);
  cache.set(head, copy);
  copy.next = copyRandomList(head.next);
  // 至此所有节点都已经复制完毕
  // 直接从cache中查到已经复制的copy
  copy.random = cache.get(head.random);
  return copy;
};
