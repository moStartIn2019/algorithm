/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 给你两个非空的链表，表示两个非负的整数。
 * 它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0)
  let current = dummy
  let exceed = 0
  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = x + y + exceed
    current.next = new ListNode(sum % 10)
      // 操作完毕后当前指针需往后移
    current = current.next
    exceed = Math.floor(sum / 10)
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  // 当l1和l2都没有且exceed > 0 时，当前的链表节点的next指向exceed的节点
  if (exceed) current.next = new ListNode(exceed)
    // 返回除初始节点的后一位
  return dummy.next
};