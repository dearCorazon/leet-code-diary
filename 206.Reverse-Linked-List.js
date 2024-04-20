/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let  reverseList = function(head) {
    // let res = null, next  ,cur = head,tmp
    // while(cur.next !== null) {
    //     next = cur.next
    //     tmp = cur
    //     tmp.next = res 
    //     res =  tmp
    //     cur = next
    // }
    // next.next = res
    // res = next
    // return res
    let prev = null;
    let curr = head;
  
    while (curr !== null) {
      // Store the next node before overwriting
      const next = curr.next;
  
      // Reverse the current node's pointer
      curr.next = prev;
  
      // Move pointers one step ahead
      prev = curr;
      curr = next;
    }
  
    return prev;
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


console.log(reverseList(head));