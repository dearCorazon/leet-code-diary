/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
    // const oneTimeMove = (nums) => {
    //     let lastNum = nums.pop()
    //     nums.unshift(lastNum)
    // }
    // for(let i = 0; i < k; i++) {
    //     oneTimeMove(nums)
    // }
    getNewIndex = (i,times,length) => {
        return  ((i + times) % length) 
    }
    const newNum = []
    for(let i = 0;i<nums.length;i++) {
        newNum[getNewIndex(i,k,nums.length)] = nums[i]
    }
    for(let i = 0;i<nums.length;i++) {
        nums[i] = newNum[i]
    }
};
const nums1 = [1,2,3,4,5,6,7]
rotate(nums1,3)
console.log(nums1);
// 0 1 2 3 4 5 6
// 7,1,2,3,4,5,6

// 6,7,1,2,3,4,5 
// 1 2 3 4 原 长度为4 次数为i 位置为n
// 4 1 2 3 第一次 1
// 3 4 1 2 第二次 2
// 2 3 4 1 第三次 3
// 1 2 3 4 第四次 4

// t n   n =  i%4 -1 
// 1 0
// 2 1
// 3 2
// 4 3
// i = 1
// t n
// 2  
// 构造一个新数组 遍历这个数组