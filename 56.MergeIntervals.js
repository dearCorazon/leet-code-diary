/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    const sortedArray =  intervals.sort((a, b) => a[0] - b[0])
    const res = []
    for(let i = 0;i<sortedArray.length;i++) {
        const curArray = sortedArray[i]
        const waitToRes = res.length ?  res.pop() : curArray
        // 如果当前数组的左值 
        // 判断该合并还是将当前waitToRes数组放入res中
        // 如果当前数组的左值大于waitToRes的右值,就把waitToRes放入res
        // 如果当前数组的左值小于waitToRes的左值，更新waitToRes的左值
        // 如果当前数组的右值大于waitToRes的右值，更新waitToRes的右值
        if(curArray[0] > waitToRes[1]) {
            res.push(waitToRes)
            res.length && res.push(curArray)
        }
        else {
            if(curArray[0] < waitToRes[0]) {
                waitToRes[0] = curArray[0]
            }
            if(curArray[1] > waitToRes[1]) {
                waitToRes[1] = curArray[1]
            }
            res.push(waitToRes)
        }
    }
    return res
      
};
const s1= [[1,3],[2,6],[8,10],[15,18]]
const s2 = [[1,4],[4,5]]
console.log(merge(s1));
console.log(merge(s2));
