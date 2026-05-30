// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring,
// every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.
 
// Example 1:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".

// Example 2:
// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 
// Constraints:
// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.


// cách giải tối ưu: sliding window

// Check Edge Case: bước này cực quan trọng nhé,
// Nếu độ dài chuỗi s mà nhỏ hơn 3, thì móc đâu ra substring độ dài 3?
// Trả mẹ về 0 luôn, ko cần chạy loop cho phí CPU.
// Khởi tạo state: Tạo một biến count = 0 để lưu kết quả.
// Dùng vòng lặp (Trượt cửa sổ): Cho index i chạy từ đầu chuỗi 0 cho đến vị trí len(s) - 3
// (tức là đảm bảo đằng sau i còn đủ 2 ký tự nữa để ghép thành chùm 3).
// Bế 3 thằng ra soi: Với mỗi vị trí i, lấy 3 ký tự tại s[i], s[i+1], và s[i+2].
// So sánh: Kiểm tra xem s[i] != s[i+1] VÀ s[i] != s[i+2] VÀ s[i+1] != s[i+2] không.
// Nhiều thằng ngu hay kiểu ép đống này vào Set rồi check length == 3, lằng nhằng vcl ra.
// So sánh chay 3 biến trực tiếp kiểu này là tốc độ execution nhanh nhất, ít ngốn resource nhất.
// Update biến đếm: Nếu thoả mãn điều kiện không trùng ở bước 5, đập count lên 1.
// Return: Trượt hết vòng lặp thì trả về thằng count. Done kèo!

const countGoodSubstrings = function(s) {
  if (s.length < 3) return 0
  let count = 0
  for (let i = 0; i < s.length-2; i++) {
    if (s[i] !== s[i+1] && s[i] !== s[i+2] && s[i+1] !== s[i+2]) {
      count++
    }
  } return count
}