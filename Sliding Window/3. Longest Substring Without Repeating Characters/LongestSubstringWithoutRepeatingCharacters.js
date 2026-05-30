// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// cách tối ưu với Sliding Window + Hash Map
// Tưởng tượng có một cái khung (cửa sổ), có mép trái (left) và mép phải (right).
// Ban đầu cửa sổ khép kín. mở rộng mép right ra kéo về bên phải để "nuốt" dần từng ký tự vào cửa sổ.
// Cứ mỗi lần nuốt 1 ký tự, kiểm tra xem: "Ê, thằng này đã có mặt trong cửa sổ chưa?".
// Nếu chưa có: Ngon, cửa sổ ngày càng to ra, ghi nhận lại kỷ lục độ dài.
// Nếu đã có mặt (Bị trùng): Báo động đỏ! không thể nuốt thêm được nữa vì sẽ vi phạm luật "không lặp lại".
// Lúc này, phải túm cái mép left kéo giật về phía bên phải để tống cổ cái thằng bị trùng kia ra khỏi cửa sổ.
// Sau khi tống cổ được nó ra, lại tiếp tục kéo mép right đi tiếp.

// Flow chạy tay chi tiết bằng Hash Map:

// Setup state: * Một cái Map để lưu trữ cặp thông tin: { Ký_tự : Vị_trí_xuất_hiện_mới_nhất_của_nó }.
// Biến left = 0 (Mép trái cửa sổ).
// Biến maxLength = 0 (Giữ kỷ lục chuỗi dài nhất).

// Kéo cửa sổ (Vòng lặp for chạy mép right):
// Cho right chạy từ 0 đến cuối chuỗi s. Mỗi bước nó "nuốt" một ký tự char.

// Check hàng trùng lặp (Core Logic ăn tiền):
// nhìn vào Map xem thằng char này đã từng xuất hiện chưa? Nếu nó đã xuất hiện,
// và cái vị trí cũ của nó đang nằm lọt thỏm trong cửa sổ hiện tại (tức là vị trí cũ > left): TRÙNG RỒI!
// Bước nhảy cóc tối ưu: Thay vì nhích cái mép left từng bước lề mề như sên,
// lôi cổ cái mép left đặt thẳng vào vị trí ngay sau cái vị trí cũ của thằng char đó (left = Vị_trí_cũ + 1).
// Cắt bỏ toàn bộ phần thừa mượt mà

// Cập nhật dữ liệu:
// Cập nhật vị trí mới nhất của thằng char vào Map. Để lỡ sau này có trùng lại nó thì còn biết đường mà né.
// Tính toán kích thước cửa sổ hiện tại: độ_dài = right - left + 1.
// Lôi maxLength ra so sánh để lưu kỷ lục mới (dùng Math.max).

// Return: Hết vòng lặp, quăng cái maxLength ra ngoài.

const lengthOfLongestSubstring = function(s) {
  const map = new Map()
  let i = 0
  let max_length = 0
  for (let j = 0; j < s.length; j++) {
    let char = s[j]
    if (map.has(char) && map.get(char) >= i) {
      i = map.get(char) + 1
    }
    map.set(char, j)
    max_length = Math.max(max_length, j - i + 1)
  } return max_length
}