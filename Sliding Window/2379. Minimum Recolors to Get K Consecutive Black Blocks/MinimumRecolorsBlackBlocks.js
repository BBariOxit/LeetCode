// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', 
// representing the color of the ith block. The characters 'W' and 'B'
// denote the colors white and black, respectively.
// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.
// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:
// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW". 
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.

// Example 2:
// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

// Constraints:
// n == blocks.length
// 1 <= n <= 100
// blocks[i] is either 'W' or 'B'.
// 1 <= k <= n

// cách tối ưu với sliding window

// Setup state ban đầu: Khai báo một biến để đếm số chữ 'W' hiện tại, gọi là curr_count-w.
// Khởi tạo cửa sổ đầu tiên: chạy một vòng lặp từ đầu mảng đến vị trí k - 1 (tức là lấy k phần tử đầu tiên).
// Thấy chữ 'W' nào thì đập curr_count-w lên 1.
// Lưu kỷ lục: Gán một biến min_ops = curr_count-w. Đây là mốc để tí nữa mình so sánh.
// Bắt đầu trượt cửa sổ (Core Logic): Bắt đầu vòng lặp thứ hai chạy index i từ k cho đến hết chuỗi n.
// Mỗi lần nhích qua phải 1 bước, cái cửa sổ của sẽ "ói" ra 1 thằng bên trái và "nuốt" vào 1 thằng bên phải.
// Update state siêu mượt: ko cần phải đếm lại toàn bộ k phần tử trong cửa sổ mới làm gì cho cực. Chỉ cần check:
// Thằng vừa bị văng ra khỏi cửa sổ (ở vị trí i - k) có phải là 'W' không? Nếu phải, trừ curr_count-w đi 1.
// Thằng mới chui vào cửa sổ (ở vị trí i) có phải là 'W' không? Nếu phải, cộng curr_count-w lên 1.
// Cập nhật kỷ lục: Sau mỗi bước trượt, lấy min_ops so sánh với cái curr_count-w mới,
// thằng nào nhỏ hơn thì giữ lại (xài hàm Math.min ấy).
// Return kết quả: Lặp đến cuối chuỗi là xong, quăng cái min_ops ra ngoài.

const minimumRecolors = function(blocks, k) {
  if (blocks.length < k) return 0
  let curr_count_w = 0
  for (let i = 0; i< k; i++) {
    if (blocks[i] === 'W') curr_count_w +=1
  }
  let min_ops = curr_count_w
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i-k] === 'W') curr_count_w -= 1
    if (blocks[i] === 'W') curr_count_w += 1
    if (curr_count_w < min_ops) min_ops = curr_count_w
    // min_ops = Math.min(curr_count_w, min_ops)
  } return min_ops
}