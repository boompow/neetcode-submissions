class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sHashTable: Map<string, number> = new Map()

        for(let item of s){
            sHashTable.set(item, (sHashTable.get(item)??0) + 1)
        }

        for(let item of t){
            const count = sHashTable.get(item)
            if(count === null){
                return false
            } else if( count === 1){
                sHashTable.delete(item)
            }else{
                sHashTable.set(item, count - 1)
            }
        }

        return sHashTable.size === 0
    }
}
