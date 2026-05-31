// // Given the head of a singly linked list, reverse the list, and return the reversed list.

// // Example 1:
// // Input: head = [1,2,3,4,5]
// // Output: [5,4,3,2,1]

// // Example 2:
// // Input: head = [1,2]
// // Output: [2,1]

// // Example 3:
// // Input: head = []
// // Output: []

// // Constraints:
// // The number of nodes in the list is the range [0, 5000].
// // -5000 <= Node.val <= 5000
 
// // Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?\

// // head [1,2,3]
// // Bản chất thật sự của head:
// // {
// //   val: 1,
// //   next: {
// //     val: 2,
// //     next: {
// //       val: 3,
// //       next: null
// //     }
// //   }
// // }


// // Cách giải quyết tối ưu (Thuật toán 3 con trỏ - Iterative)
// sẽ cần 3 thằng đệ chạy song song:

// prev (Quá khứ): Ban đầu nó ko có gì cả, trỏ vào null (vì thằng head sau 
// khi lật ngược sẽ biến thành đuôi, đuôi thì phải trỏ vào null).
// curr (Hiện tại): Ban đầu đứng ở head. Đây là thằng đang cầm trên tay để chuẩn bị bẻ mũi tên.
// nextTemp (Tương lai): Thằng này sinh ra để làm "phao cứu sinh".

// Quy trình chạy vòng lặp (while curr chưa chạm đáy null):
// Bước 1 (Lưu tương lai): Trước khi bẻ mũi tên của thằng curr,
// BẮT BUỘC phải lấy thằng nextTemp bám chặt lấy thằng curr.next. Nếu ko lưu lại,
// lúc bẻ mũi tên ngược về sau, phần còn lại của danh sách sẽ trôi dạt vào không gian hư vô,
// mất dấu nó vĩnh viễn!

// Bước 2 (Bẻ mũi tên): Cầm cái mũi tên của thằng curr (curr.next), chĩa ngược nó về thằng quá khứ (prev).
// Bước 3 (Nhích prev lên): Đẩy thằng prev bước lên vị trí của thằng curr hiện tại (Chốt sổ đoạn đã lật).
// Bước 4 (Nhích curr lên): Đẩy thằng curr bước tiếp sang cái vị trí tương lai nextTemp mà đã lưu ở Bước 1.

// Cứ lặp đi lặp lại như thế cho đến khi curr văng ra khỏi danh sách (null).
// Lúc này thằng prev đang đứng đúng ngay cái Node cuối cùng của danh sách cũ
// (tức là cái head của danh sách mới). quăng thằng prev ra là xong việc!

const reverseList = function(head) {
  let prev = null
  let curr = head
  while (curr != null) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }return prev
}