/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    //1. 维护一个单调队列
    //例如[1,3,-1,-3,5,3,6,7] 当k为3时
    //1，3，1 开始 即从k-1开始算
    //第一次循环 求出最大值为3,当前队列为3，1 
    //第二次循环 队列为 3 1 -1 最左为3 无人出队
    //第三次循环 队列为 1 -1 -3 最左为1  3 出队 原因是滑动窗口右移了
    //第四次循环 队列为 -1 -3 5 5>-3和-1 -> -1和-3 出队 队列变为5
    //第5次循环  队列为 5，3  无人出队
    //第6次循环 队列为 5，3，6  6大于5和3 5，3出队
    //第7次循环 队列为 5，7 
    //..初步推定 初始队列为[] 当加入一个数 和左边的每一个循环比较 如果比左边的数大 小的数就出队 直到到达队首/或者遇到比自己大的数
    // 第二个出队条件为  当队列长度大于k时 队首出队
    // 开始输出最大值的条件为 从第k-1次循环开始 输出队首  循环停止条件为nums循环完毕

    // 新思路 每一个数字都有生命周期
    // 单调队列应该记录下标 每到一个新的生命周期应该清除 到期的值
    // 队列其实也记录了时间 最左边的数生命周期相对当前时间是最短的
    // 0,1,2,3,4,5
    // 1,3,1,2,0,5为例子
    // 第一次循环 下标为0 队列为 [0]
    // 第二次循环 当前应该出队的为0 队列为 1
    // 第三次循环 当前应该出队的为1 队列为 1,2 [3,1]
    // 第四次循环 下标为3 待比较数字为2 2>q[2] 2<q[1] 所以q[2]出队 当前队列为1,3,又由于当前下标为0的值已经过期
    
    let queue = []
    const ans = []
    for(let i = 0 ;i< nums.length;i++) {
        // 出队 q[0] <= i - K 
        if(queue[0] <= (i - k)) {
            queue.shift()
        }
       
        while(queue.length > 0 && nums[queue[queue.length-1] ] < nums[i]) {
            if(nums[i] > nums[queue[queue.length-1]]) {
                queue.pop()
            }
        }
        queue.push(i)
        if(i >= k-1) {
            ans.push(nums[queue[0]])
        }
    }
    return ans

};
const s1 = [1,3,-1,-3,5,3,6,7], k1 = 3
const s2 = [1,-1] ,k2 = 1
const s3 = [7,2,4], k3 = 2 
const s4= [1,3,1,2,0,5] ,k4 = 3


console.log(maxSlidingWindow(s1,k1));
console.log(maxSlidingWindow(s2,k2));
console.log(maxSlidingWindow(s3,k3));
console.log(maxSlidingWindow(s4,k4));

// [1,3,1,2,0,5]
// 第一次循环 1，3，1 -> 3,1
// 第二次循环 
// 第三次循环 