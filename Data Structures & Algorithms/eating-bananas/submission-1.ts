class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const sortedPiles: number[] = piles.sort((a,b)=>a-b)
        let l: number = 0
        let r: number = sortedPiles[piles.length-1]
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
            }else if(sum > h){
                l= m+1
            }
        }

        return min
    }
}
