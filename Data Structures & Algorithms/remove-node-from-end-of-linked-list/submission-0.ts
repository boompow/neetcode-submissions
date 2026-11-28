/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        // get the length of the list
        let curr1: ListNode | null = head
        let len: number = 0

        while(curr1){
            curr1 = curr1.next
            len++
        }

        // handle edge cases of n >= len
        if(n >= len)return head.next

        // handle n < len by finding the complement distance
        let complement: number = len - n
        let prev: ListNode | null = null
        let curr2: ListNode | null = head

        while(complement > 0){
            prev = curr2
            curr2 = curr2.next
            complement --
        } 

        prev.next = curr2.next
        return head
    }
}
