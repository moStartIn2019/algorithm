/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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