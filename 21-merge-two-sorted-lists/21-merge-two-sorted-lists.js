/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) { 
    var mergedList = new ListNode(0);
    var afterMerge = mergedList
    while(list1 !== null || list2 !== null) {
        if(list2 === null || list1 !== null && list1.val <= list2.val) {
            afterMerge.next = new ListNode(list1.val);
            list1 = list1.next;
        }  else {
            afterMerge.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        afterMerge = afterMerge.next;
    }
    
    return mergedList.next;
};
