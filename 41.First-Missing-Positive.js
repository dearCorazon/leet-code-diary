/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
//1.原地哈希
//[3,4,-1,1]
//[-1,4,3,1]
//[-1,1,3,4]
//[1,-1,3,4]
//[2,3,4,1]
//[3,2,4,1]
//[4,2,3,1]
//[1,2,3,4]
//[3,6,2,9,7]
//[2,6,3,9,7]
//[6,2,3,9,7]
//[1,2,3,6,7]
//[3,6,2,9,7]
//[6,3,2,9,7]
//[6,2,3,9,7]
//[3,5,2,5,4]
//[2,5,3,5,4]
//[5,2,3,5,4]
//[4,2,3,5,5]
//[5,2,3,4,5]
//[5,2,3]


//[3,4,1,-1]
//[-1,4,1,3]
//[1,4,-1,3]
// 理想的情况是[1,2,3,4] 这样子直接比对即可
// 解题步骤
// 1.从左到右遍历 如果该数能够落在[1,N] 区间内 则交换当前数字和
// 为什么交换一次不行 因为只当前位置的数换到了正确的位置，如果只换1次的话，后面会把错误数换过来
// 在此地循环 可以将当前位置
const canChange = (num,length) => {
    if(num>0 && num<=length) {
         return true
    }
    else {
        return false
    }
}
 for(let i=0 ;i<nums.length;i++) {
    while(true) {
        if(i+1 === nums[i] || !canChange(nums[i],nums.length) || nums[nums[i]-1] === nums[i]) {
            break
        }
        else{
            const temp = nums[nums[i]-1]
            nums[nums[i]-1] = nums[i]
            nums[i] = temp
        }
    }
 }
 for(let i = 0;i<nums.length;i++) {
    if(nums[i] !== i+1) {
        return i+1
    }
 }
 return nums.length+1
};

const s1 =[1,2,0],s2= [3,4,-1,1],s3=[1,1]
console.log(firstMissingPositive(s3));