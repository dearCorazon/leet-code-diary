/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let detectCycle = function(head) {
    const map = new Map()
    let cur = head
    while(cur !== null) {
        if(map.has(cur)) {
            return cur
        }else{
            map.set(cur)
        }
        cur = cur.next
    }
    return null
};