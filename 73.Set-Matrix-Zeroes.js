/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
    const colHasZero = []
    const rowHasZero = []
    for(let i = 0;i<matrix.length;i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const cur =  matrix[i][j]
            if(cur === 0 ) {
                colHasZero.push(i)
                rowHasZero.push(j)
            }
        }
    }
    for(let i = 0;i<matrix.length;i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(colHasZero.includes(i) || rowHasZero.includes(j)) {
                matrix[i][j] = 0
            }
        }
    }

};

const m1 = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(m1));