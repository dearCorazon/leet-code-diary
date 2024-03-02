/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
        const targetArray = new Array(26).fill(0)
        const res = []
        const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)
        if(s.length < p.length) return res
        p.split('').forEach(char => {
            targetArray[getIndex(char)] ++
        })
        const sArray = s.split('')
        const isSame = (array1,array2) => {
            let res = true
            for (let i  = 0; i < array1.length; i++) {
                if(array1[i] === array2[i]) {
                    continue
                }
                else {
                    res = false
                    break
                }
                
            }
            return res
        }
        for(let i=0 ; i < s.length-p.length+1 ; i++) {
            const curArray = sArray.slice(i,i+p.length)
            const windowArray =  new Array(26).fill(0)
            curArray.forEach(char => {
                windowArray[getIndex(char)] ++
            })
            if(isSame(targetArray,  )) {
                res.push(i)
            }
        }

        return res
    
};
console.log(findAnagrams('cbaebabacd', 'abc'));