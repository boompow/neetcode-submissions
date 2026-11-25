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
     * @return {ListNode}
     */
    reverseList(head: ListNode): ListNode {
        let prev: ListNode | null = null
        let curr: ListNode | null = head

        while(curr){
            const next: ListNode | null = curr.next
            curr.next = prev
            prev = curr
            curr = next
            
        }
        return prev 

    }
}
