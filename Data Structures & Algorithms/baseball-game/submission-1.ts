class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let record: number[] = []

        function isDigit(str: string): boolean{
            for(let i=0; i< str.length; i++){
                if(str[i] === "-") continue
                if(str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false
            }
            return true
        }

        for(let operation of operations){
            const lastIndex = record.length-1

            if(isDigit(operation)){
                record.push(Number(operation))
            }else if(operation === "+" && lastIndex >= 1){
                record.push(record[lastIndex]+ record[lastIndex-1])
            }else if(operation === "C" && lastIndex >= 0){
                record.pop()
            }else if(operation === "D" && lastIndex >= 0){
                record.push(2*record[lastIndex])
            }
        }

        let sum: number = 0

        for(let item of record){
            sum += item
        }

        return sum
    }
}
