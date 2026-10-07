class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const hashTable: Map<string, number[][]> = new Map()

        for(let i=0; i < board.length; i++){
            for(let j=0; j < board[i].length; j++){
                if(Number(board[i][j])){
                    const getCoordinates = hashTable.get(board[i][j])

                    if(getCoordinates){
                        for(let k =0; k< getCoordinates.length; k++){
                            const sameRow = i === getCoordinates[k][0]
                            const sameColumn = j === getCoordinates[k][1]
                            const sameSubGrid = Math.floor(i/3) === Math.floor(getCoordinates[k][0]/3) &&
                            Math.floor(j/3) === Math.floor(getCoordinates[k][1]/3)

                            if(sameRow || sameColumn || sameSubGrid){
                                return false
                            }
                        }

                        hashTable.set(board[i][j], [...getCoordinates, [i, j]])
                    }else{
                       hashTable.set(board[i][j], [[i, j]]) 
                    }
                }
            }
        }

        return true
    }
}
