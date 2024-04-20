/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const setA = new Map()
    while(headA !== null) {
        setA.set(headA)
        headA = headA.next
    }
    while(headB !== null) {
        if(setA.has(headB)) {
            return headB
        }else {
            headB = headB.next
        }
    }
    return null

    
};