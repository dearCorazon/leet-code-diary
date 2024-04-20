/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
    // 1.先翻转2. 再按对角线折叠  翻转轴为\
    flip(matrix)
    flipAntiDiagonal(matrix)
    return  matrix

};
function flip(matrix) {
    const rowBound = matrix.length % 2 === 0 ? matrix.length / 2 : matrix.length / 2 - 1
    for (let row = 0; row < rowBound; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            [matrix[row][col], matrix[matrix.length - 1 - row][col]] = [matrix[matrix.length - 1 - row][col], matrix[row][col]]
        }
    }
    return matrix
}
function flipAntiDiagonal(matrix) {
    const curColBound = (row) => row
    console.log('begin');
    for(let row =0 ;row < matrix.length  ; row++) {
        for(let col=0 ;col < curColBound(row) ;col++) {
            console.log(`交换${row}${col}和${col}${row}`);
            [matrix[row][col],matrix[col][row]] = [matrix[col][row],matrix[row][col]]
        }
    }
    return matrix
}
const m1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
],m2 = [
    [5 , 1 , 9 ,11 ],
    [2 , 4 , 8 ,10 ],
    [13, 3 , 6 , 7 ],
    [15, 14, 12,16 ]
]

console.log(rotate(m1),rotate(m2));