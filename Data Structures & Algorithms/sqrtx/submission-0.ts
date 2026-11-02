class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        let l: number = 0
        let r: number = x

        while(l <= r){
            let m: number = Math.floor((r+l)/2)

            if(m*m < x){
                l = m+1
            }else if(m*m > x){
                r = m-1
            }else{
                return m
            }
        }

        return r
    }
}
