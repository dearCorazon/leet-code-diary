/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
    /**
     * A state machine that allows transitioning between states.
     *
     * @return {Object} An object with methods to transition to the next state and get the current state.
     */
    function StateMachine() {
        const states = ['right', 'down', 'left', 'up'];
        let currentState = 0;

        function toNextState() {
            currentState++
            console.log(states[currentState%4]);
        }
        function getCurState() {
            return states[currentState%4]
        }
        return {
            toNextState, getCurState
        };
    }
    function createMatrixIterator(matrix) {
        let row = 0;
        let col = 0;
        const colBound = matrix[0].length
        const rowBound = matrix.length
        const visitedMap = new Map()
        const isUnVisited = (row, col) => !visitedMap.has(`${row}${col}`)
        const isInBound = (crow, ccol) => crow > -1 && crow < rowBound && ccol > -1 && ccol < colBound
        const { toNextState, getCurState } = StateMachine()
        /**
         * Generate the next index based on the given state, row, and column.
         *
         * @param {string} state - the current state
         * @param {number} row - the current row index
         * @param {number} col - the current column index
         * @return {Array} the next index based on the state
         */
        function getNextIndex(state, row, col) {
            const map = {
                right: () => [row, col + 1],
                left: () => [row, col - 1],
                up: () => [row - 1, col],
                down: () => [row + 1, col]
            }
            const func = map[state]
            return func
        } 



        function getNextState() {
            console.log(`迭代开始,位置${row}${col}`);
            const [nrow, ncol] = getNextIndex(getCurState(),row,col)()
            const inBound = isInBound(nrow, ncol)
            const isVisited = !isUnVisited(nrow, ncol)
            const setNextIndex = () => {
                const [nrow, ncol] = getNextIndex(getCurState(),row,col)()
                row = nrow
                col = ncol
            }
            visitedMap.set(`${row}${col}`)
            if (!inBound) {
                toNextState()
                console.log(`${nrow}, ${ncol}出界，当前方向${getCurState()}`);
                setNextIndex()
                if(matrix[row]?.[col] !== undefined) {
                    if(!isUnVisited(row,col)) {
                        return {done:true}
                    }
                    return { done: false }
                }else {
                    return {done:true}
                }
            }
            if (inBound && isVisited) {
                toNextState()
                console.log(`${nrow}, ${ncol}未出界，已遍历，当前方向${getCurState()}`);
                setNextIndex()
                if(!isUnVisited(row,col)){
                    console.log(`检查${matrix[row][col]}已遍历`);
                    return {done:true}
                }else{
                    return {done:false}
                }
            }
            if(inBound && !isVisited) {
                console.log(`${nrow}, ${ncol}未出界，未遍历，当前方向${getCurState()}`);
                setNextIndex()
                return {done:false}
            }
            
        }

        function next() {
            
            const value = matrix[row][col]
            
            //1. 确定是否done，如过done
            const {done} = getNextState()

            return { value:value, done }
        }

        return {
            next
        };
        
    }
    const res = []
    const iterator = createMatrixIterator(matrix)
    let result = iterator.next()
    

    while (!result.done) {
        res.push(result.value)
        console.log(res);
        result = iterator.next()
    }
    res.push(result.value)
    return res
    

    
}
const m1 = [
[1,2,3],
[4,5,6],
[7,8,9]],
m2= [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]
m3 = [[1,2,3]],
m4 = [
[1,2],
[3,4]],
m5 = [[2,5],[8,4],[0,-1]]

console.log(spiralOrder(m5));


