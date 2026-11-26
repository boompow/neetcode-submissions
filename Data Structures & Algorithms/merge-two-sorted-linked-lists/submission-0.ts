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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy: ListNode = new ListNode(0)
        let tailNode:ListNode = dummy
        let current1: ListNode | null = list1
        let current2: ListNode | null = list2

        while(current1 !== null && current2 !== null){
            if(current1.val <= current2.val){
                tailNode.next = current1
                current1 = current1.next
            }else{
                tailNode.next = current2
                current2 = current2.next
            }

            tailNode = tailNode.next
        }

        current1 === null ? tailNode.next = current2 : tailNode.next = current1

        return dummy.next
    }
}
