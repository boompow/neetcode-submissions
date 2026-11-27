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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        // first pass: find the mid point of a linked list using fast and slow pointers
        let fast: ListNode | null = head
        let slow: ListNode | null = head

        while(fast !== null && fast.next !== null){
            fast = fast.next.next
            slow = slow.next
        }

        //second: use the slow pointer's next node as the start point of the right half and reverse that sub linkedlist
        let prev: ListNode | null = null
        let curr: ListNode | null = slow.next
        slow.next = null // cutoff the first sub linkedlist

        while(curr !== null){
            const tempNext: ListNode | null = curr.next
            curr.next = prev
            prev = curr
            curr = tempNext
        }

        // link the head and tail nodes together
        let first: ListNode | null = head
        let second: ListNode | null = prev

        while(first !== null && second !== null){
            const firstNext: ListNode | null = first.next
            const secondNext: ListNode | null = second.next

            first.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }

    }
}
