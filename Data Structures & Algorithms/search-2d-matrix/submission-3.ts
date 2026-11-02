class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let l1: number = 0
        let r1: number = matrix.length-1
        let row: number[] = []

        while(l1<=r1){
            let m: number = Math.floor((r1+l1)/2)

            if(matrix[m][0] > target){
                r1 = m-1
            }else if(matrix[m][0] < target){
                l1 = m+1
            }else{
                return true
            }
        }

        
        row=matrix[r1] ? matrix[r1] : []
        let l2: number = 0
        let r2: number = row.length -1

        while(l2 <= r2){
            let m: number = Math.floor((r2+l2)/2)

            if(row[m] > target){
                r2 = m-1
            }else if(row[m] < target){
                l2 = m+1
            }else{
                return true
            }
        }

        return false
    }
}
