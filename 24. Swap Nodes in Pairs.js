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
let swapPairs = function(head) {
    let f = head
    let s = head?.next
    if(!s || !f) {
        return head
        // if(head===f) {
        //     return head
        // }
        // return null
    }
    
    f.next = s.next
    s.next = f
    f.next = swapPairs(f.next)
    return s

};