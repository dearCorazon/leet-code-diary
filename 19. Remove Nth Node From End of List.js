/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    let idx = 0
    while(f1!==null) {
        if(idx===n) {
            deleteNode = head
        }
        if(idx === n+1) {
            preDelete = head
        }
        if(idx>=n) {
            deleteNode =  deleteNode.next
        }
        if(idx>=n+1) {
            preDelete = preDelete.next
        }
        idx++
        f1 = f1.next
    }
    if(deleteNode === null && preDelete === null ) {
         head = head.next
    }else if(deleteNode !== null && preDelete == null ) {
        head.next = deleteNode.next
    }else {
        preDelete.next = deleteNode.next
    }
    return head

};