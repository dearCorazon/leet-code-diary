/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function revese(head,end)
{   
    const newEnd = head
    let pre = null,cur = head
    while(true) {
        if(cur === end) {
            cur.next = pre
            return newEnd
        }
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
        
        
    }
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function(head, k) {
    let start  = head,end = head ,p = head,headPre =null
    let idx = 0
    const newEndList= []
    while(p !== null) {
        idx++
        if(idx === k) {
            const next = end.next
            const newEnd = revese(start,end)
            newEndList.push(end)
            newEnd.next = next
            p = newEnd 
            start = p.next
            end = p.next
            idx = 0 
        }else {
            end = end.next
        }
        headPre = p 
        p = p.next
    }
    return newEndList.length ? newEndList[0] : head
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const end = head.next.next
const newHead = reverseKGroup(head,2)
let p = newHead
while (p !== null ) {
    console.log(p.val);
    p = p.next
}