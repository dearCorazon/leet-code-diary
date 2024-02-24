// 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max_num  = leftIndex = rightIndex = 0
    // 滑动窗口
    // 左指针和右指针同时从0出发
    // 右指针先移动，直到重复，此时移动左指针
    let curAllChar = new Set();
    // 循环退出的条件为rightIndex到达字符串末尾 先试试
    // 每次循环移动左指针或右指针 
    while(rightIndex < s.length ) {
        if(leftIndex === 0 && rightIndex ===0) {
            curAllChar.add(s[leftIndex])
        }
        if(curAllChar.has(s[rightIndex]) && rightIndex !== 0) {
            curAllChar.delete(s[leftIndex])
            leftIndex++
        }else{
            curAllChar.add(s[rightIndex])
            max_num = Math.max(max_num, curAllChar.size)
            rightIndex++
        }
    }
    

    return max_num

};

s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
s4 = " "
s5 = "dvdf"
s6 = "aabaab!bb"

console.log(lengthOfLongestSubstring(s1)); //3
console.log(lengthOfLongestSubstring(s2)); //1
console.log(lengthOfLongestSubstring(s3)); //3
console.log(lengthOfLongestSubstring(s4));
console.log(lengthOfLongestSubstring(s5));
console.log(lengthOfLongestSubstring(s6));