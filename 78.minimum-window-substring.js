
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function(s, t) {

};
const s1 ='ADOBECODEBANC', t1 = 'ABC'
const s2 = 'a', t2 = 'a'
const s3 = 'a', t3 = 'aa'
const s4 = 'abc', t4 = 'b'
const s5 = 'bba', t5 = 'ab'

console.log(minWindow(s1,t1));
console.log(minWindow(s2,t2));
console.log(minWindow(s3,t3));
console.log(minWindow(s4,t4));
console.log(minWindow(s5,t5));
// 滑动窗口
// 维护一个滑动窗口 l r 
// 用一个map记录t的每个字母出现的次数
// ADOBECODEBANC
// l    r       此时包含一个完整的abc 
//  l        r  此时包含一个完整的abc 再缩短
//      l    r  此时包含一个完整的abc 为当前最小
//       l     r此时包含一个完整的abc 可以缩短
//          l  r 此时包含一个完整的abc 为当前最短
// 类推出当前移动规则为
// 启动阶段 左右指针从0开始向右移动
// 右指针移动的条件为寻找包含t字串的右边界
//
// 左指针移动的条件为右指针找到右边界后 再移动左指针找到最小 找到之后记录下来  再移动左指针直到目标map中减少  再移动右指针找到下一个包含t的字串
// 停止的条件为右指针到达字符串末尾
// 整体流程
// 缩圈： 如果当前l所指的字符 不在targetMap中 l++ 如果在 判断当前窗口中的该值要大于targetMap中的值 l++ 否则停止移动 此时达到最小 记录下当前的值
// 扩张左边界 直到遇到targetMap中的值  -> l++ 进入下一个循环
