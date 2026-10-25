class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let record: number[] = []
        let sum: number = 0

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
                sum += Number(operation)
            }else if(operation === "+" && lastIndex >= 1){
                const sumValue: number = record[lastIndex]+ record[lastIndex-1]
                record.push(sumValue)
                sum += sumValue
            }else if(operation === "C" && lastIndex >= 0){
                sum -= record.pop()
            }else if(operation === "D" && lastIndex >= 0){
                const doubledValue: number = 2*record[lastIndex]
                record.push(doubledValue)
                sum += doubledValue
            }
        }

        return sum
    }
}
