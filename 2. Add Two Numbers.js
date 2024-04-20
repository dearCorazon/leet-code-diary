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
const getRemainderAndDivisor = (num) => {
    const remainder =  num % 10
    const divisor =  (num - t2) / 10
    return [remainder,divisor]
}
let  addTwoNumbers = function(l1, l2,divisor=0) {
    if(l1===null && l2 === null) {
        if(divisor === 0 ) {
            return null
        }else {
            return new ListNode(divisor,null)
        }
    }
    const val1 = l1 === null ? 0 : l1.val
    const val2 = l2 === null ? 0 : l2.val
    const sum1 = val1 + val2 + divisor
    const [remainder,divisor] = getRemainderAndDivisor(sum1)
    const curNode = new ListNode()
    curNode.val = remainder
    curNode.next = addTwoNumbers(l1.next,l2.next,divisor)
    return curNode
};