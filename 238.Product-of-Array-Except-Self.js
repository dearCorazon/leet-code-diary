/**
 * @param {number[]} nums
 * @return {number[]}
 */
let  productExceptSelf = function(nums) {
    let leftArr = [],rightArr = []
    for(let i= 0 ; i< nums.length ; i++) {
        if(i === 0 ) {
            leftArr[i]= 1
        }
        else {
            leftArr[i] = leftArr[i-1] * nums[i-1]
        }
    }
    for(let i = nums.length-1;i >= 0 ; i--) {
        if(i === nums.length-1) {
            rightArr[i] = 1
        }else{
            rightArr[i] = rightArr[i+1] * nums[i+1]
        }
    }
    let res = []
    for(let i = 0 ; i< nums.length ; i++) {
        res[i] = leftArr[i] * rightArr[i]
    }

    return res
};
const s1 = [1,2,3,4],s2= [-1,1,0,-3,3]

console.log(productExceptSelf(s1));
console.log(productExceptSelf(s2));