// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100



// Cách giải quyết tối ưu tận răng (Thuật toán Rùa - Thỏ)
// Cái tên nói lên tất cả. thả 2 con trỏ cùng xuất phát từ vạch đích (head).

// Setup:
// Con trỏ slow (Rùa): Cứ mỗi nhịp, nó lết đúng 1 bước (slow = slow.next).
// Con trỏ fast (Thỏ): Cứ mỗi nhịp, nó nhảy cóc 2 bước cùng lúc (fast = fast.next.next).

// Core Logic (Sự ảo diệu của toán học):
// Vì thằng Thỏ luôn chạy nhanh gấp đôi thằng Rùa, nên khi thằng Thỏ chạy cắm đầu vào tường
// (chạm đến cuối danh sách là null), thì thằng Rùa mới lết được ĐÚNG PHÂN NỬA quãng đường!

// hoàn hảo chưa? Thằng fast vừa báo "Tới đích rồi" là chỉ việc cúi xuống nắm đầu thằng slow quăng ra ngoài,
// vì nó đang đứng CHÍNH XÁC ở vị trí giữa danh sách.

// Xử lý triệt để cái bẫy Chẵn/Lẻ:
// Nhờ thiết kế bước nhảy 2 ô của thằng fast, thuật toán này tự động giải quyết luôn luật
// "nếu chẵn thì lấy thằng thứ 2" của đề bài mà ko cần phải viết thêm dòng if/else nào cả.

// Nếu lẻ (VD: 5 Node): Thằng fast sẽ dừng lại đúng ở cái Node cuối cùng (Node 5).
// Thằng slow lúc này dừng ở Node 3 (chính giữa).

// Nếu chẵn (VD: 6 Node): Thằng fast sẽ nhảy lố qua cái Node cuối cùng và rớt thẳng xuống vực (chạm null).
// Do nó nhảy lố thêm 1 nhịp chót, nên thằng slow cũng được kéo lê thêm 1 bước nữa từ Node 3 sang Node 4.
// Đúng y bon yêu cầu của đề bài!

// Vòng lặp sẽ chỉ chạy cho đến khi thằng fast chạm cuối mảng (fast === null hoặc fast.next === null).

const middleNode = function(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  } return slow
}