class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let pointer1: number = m-1
        let pointer2: number = n-1
        let currentIndex: number = nums1.length-1

        while( pointer2 >= 0){
            if(pointer1 >= 0 && nums1[pointer1]> nums2[pointer2]){
                nums1[currentIndex] = nums1[pointer1]
                pointer1--
            }else{
                nums1[currentIndex] = nums2[pointer2]
                pointer2--
            }
            currentIndex--
        }   
    }
}
