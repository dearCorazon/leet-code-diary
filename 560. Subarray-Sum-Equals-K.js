/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 方法1 
    // sum(i,j)=sum(0,j)-sum(0,i) 先用一个map记录下0到j所有的和
    // 那么题目就转换为一个滑动窗口右指针减去左指针的和等于k
    // 一个双层循环遍历 没遇到一一个右指针减去左指针为k的值  res++
    // 方法2  前缀和
    // 前缀和是是个什么东西
    // 1  3  4  5  1  2  3  1
    // 1  4  8  13 14 16 19 20
    // 区间和等于S(L,R) = S(R) - S(L)
    // let res = 0
    // let sumMap = new Map()
    // let preSum = 0
    // sumMap.set(0,1)
    // for(let i = 0; i< nums.length ; i++) {
    //     const curSum = preSum + nums[i]
    //     const tmp = curSum - k
    //     preSum = curSum
    //     if(sumMap.has(tmp)) {
    //         res = res + sumMap.get(tmp)
    //     }
    //     if(sumMap.has(curSum)) {
    //         sumMap.set(curSum,sumMap.get(curSum) + 1)
    //     }else {
    //         sumMap.set(curSum,1)
    //     }
    // }

    // return res
    const map = { 0: 1 };
    let prefixSum = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
  
      if (map[prefixSum - k]) {
        count += map[prefixSum - k];
      }
  
      if (map[prefixSum]) {
        map[prefixSum]++;
      } else {
        map[prefixSum] = 1;
      }
    }
    return count;
    
}
const nums1 = [1] ,nums3 =[1,1,1]
const k1 = 1 ,k3 =2
const nums2 = [1,2,3] 
const k2 = 3
console.log(subarraySum(nums3,k3));
console.log(subarraySum(nums2,k2));
//1  1  1
//1  2  3

//0  1  2  
//1  2  3
//0  1  3  6 

//0  1  2
//1  1  1
//0  1  2  3