/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while(row < matrix.length && col >= 0) {
        let cur = matrix[row][col];
        
        if(cur === target) {
            return true;
        } else if(cur > target) {
            col--;
        } else {
            row++;
        }
    }
    
    return false;
}; 

const m1 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
console.log(searchMatrix(m1,5));