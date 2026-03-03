// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// cách 1: ko tối ưu với array-convert và sort
// Logic: Duyệt hết list1, ném vào mảng. Duyệt hết list2, ném vào mảng. Dùng hàm .sort() thần thánh của JS.
// Xong rồi chạy vòng lặp tạo lại cái Linked List mới.
// Time Complexity: O((N+M)log(N+M)) - Do tốn thời gian Sort.
// Space Complexity: O(N+M) - Tốn thêm một cái mảng và một đống Node mới.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const mergeTwoLists = (list1, list2) => {
  let arr = []
  while (list1) {
    arr.push(list1.val)
    list1 = list1.next
  }
  while (list2) {
    arr.push(list2.val)
    list2 = list2.next
  }

  arr.sort((a,b) => a-b) //sap xep tang dan
  let dummy = new ListNode(0)
  let curr = dummy
  for (let val of arr) {
    curr.next = new ListNode(val)
    curr = curr.next
  }
  return dummy.next
}

// cách 2: cách Recursion
// Logic: So sánh hai cái đầu. Thằng nào nhỏ hơn thì giữ lại, rồi gọi chính cái hàm đó để tìm thằng kế tiếp cho nó.
// Time Complexity: O(N+M) - Duyệt mỗi node đúng 1 lần.
// Space Complexity: O(N+M) - Nguy hiểm! Mỗi lần gọi đệ quy nó tạo một Stack frame.
// Nếu danh sách có 10.000 node là máy báo Stack Overflow ngay lập tức.
const mergeTwoLists2 = (list1, list2) => {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists2(list1, list2.next)
    return list2
  }
}


const listToArray = (head) => {
  let out = []
  while (head) {
    out.push(head.val)
    head = head.next
  }
  return out
}

// chạy (input la linked list)
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const merged = mergeTwoLists(list1, list2)
console.log(listToArray(merged).join('->'))

const merged2 = mergeTwoLists2(list1, list2)
console.log(listToArray(merged2).join('->'))