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
        // first pass: psuhing the nodes into an array
        let nodeArray: ListNode[] = []
        let current: ListNode | null = head

        while(current){
            nodeArray.push(current)
            current = current.next
        }

        // second pass: popping the array and linking it back to the nodes
        let left: ListNode | null = head
        let rightPointer: number = nodeArray.length-1
        const mid: number = Math.floor(nodeArray.length/2)

        while(rightPointer >= mid){
            const right: ListNode | null = nodeArray[rightPointer]
            const temp = left.next
            left.next = right
            left = temp

            rightPointer === mid ? right.next = null : right.next = temp
            rightPointer --
        }
    }
}
