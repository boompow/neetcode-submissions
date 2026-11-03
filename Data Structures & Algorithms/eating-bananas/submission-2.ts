class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let max: number = piles[0]
        for(let pile of piles){
            max= Math.max(max, pile)
        }
        
        let l: number = 0
        let r: number = max
        let min:number = max

        while(l<=r){
            const m: number = Math.floor((l+r) / 2)
            let sum: number = 0
            for(let pile of piles){
                sum += Math.ceil(pile/m)
            }

            if(sum <= h){
                min = m
                r = m-1
            }else if(sum > h){
                l= m+1
            }
        }

        return min
    }
}
