class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    getKey(str:string):string{
        let count = new Array(26).fill(0)

        for(let i =0; i < str.length; i++){
            count[str.charCodeAt(i)-97] ++
        }

        return count.join("#")
    }

    groupAnagrams(strs: string[]): string[][] {
        const hashTable: Map<string, string[]> = new Map()
        let groupedAnagram: string[][] = []

        for(let item of strs){
            const key = this.getKey(item)
            const hasKey = hashTable.get(key)

            if(hasKey){
                hashTable.set(key, [...hasKey, item])
            }else{
                hashTable.set(key, [item])
            }
        }

        for(let value of hashTable.values()){
            groupedAnagram.push(value)
        }

        return groupedAnagram
    }
}
