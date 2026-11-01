/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left: number = 1
        let right: number = n

        while(left <= right){
            let mid: number = Math.floor((right+left)/2)
            let check: number = guess(mid)

            if(check === 1){
                left = mid + 1
            }else if(check === -1){
                right = mid - 1
            }else{
                return mid
            }
        }

        return -1
    }
}
