interface ListNode<T> {
   value: T;
   next: ListNode<T> | null;
}

function middleNodeLinkedList(head: ListNode<number>) {
   let slow = head;
   let fast = head;

   while (fast !== null && fast.next !== null) {
      slow = slow.next!;
      fast = fast.next.next!;
   }

   return slow;
}

// Example usage
const node3: ListNode<number> = { value: 3, next: null };
const node2: ListNode<number> = { value: 2, next: node3 };
const node1: ListNode<number> = { value: 1, next: node2 };

console.log(middleNodeLinkedList(node1)); // Outputs the middle node (node2)
