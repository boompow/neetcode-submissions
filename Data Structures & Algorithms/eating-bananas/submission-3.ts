class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l: number = 0
        let r: number = Math.max(...piles)
        let min:number = r

        while(l<=r){
            const m: number = Math.floor((l+r) / 2)
            let sum: number = 0
            for(let pile of piles){
                sum += Math.ceil(pile/m)
            }

            if(sum <= h){
                min = m
                r = m-1
            }else{
                l= m+1
            }
        }

        return min
    }
}
