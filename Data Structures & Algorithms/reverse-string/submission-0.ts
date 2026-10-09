class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let leftPointer: number = 0
        let rightPointer: number = s.length -1

        while(leftPointer < rightPointer){
            [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]]

            leftPointer ++
            rightPointer --
        }
    }
}
