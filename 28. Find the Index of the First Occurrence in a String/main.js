// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// cách thực tế với built in
// Logic: Dùng hàm indexOf có sẵn của String.
// Time Complexity: O(n X m) (tùy thuộc vào engine của trình duyệt).
// Space Complexity: O(1).
const strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
}

// Cấp độ 1: Brute Force (Vét cạn)
// Logic: Thử mọi vị trí có thể, sai thì quay lại nhích lên 1 đơn vị.
// Time Complexity: O(n X m) — Tệ nếu chuỗi dài.
// Space Complexity: O(1) — Ko tốn thêm bộ nhớ gì ngoài mấy cái biến chạy.

// Tại sao cách này gọi là "Ngu" (Kém tối ưu)?
// Hãy nhìn vào ví dụ: haystack = "aaaaaaab", needle = "aaab".
// Tại i=0, nó so sánh 4 lần mới thấy sai ở chữ 'b'.
// Tại i=1, nó lại so sánh lại từ đầu 4 lần nữa.
// Nó "quên" mất rằng ở bước trước nó đã biết các chữ cái đứng sau là 'a' rồi.

const strStr2 = function(haystack, needle) {
  let n = haystack.length
  let m = needle.length
  for (let i = 0; i <= n-m; i++) {
    let j = 0 // j: Là chỉ số chạy của cây kim (từ 0 đến m-1).
    while (j < m && haystack[i + j] === needle[j]) {
      j++
    }
    if (j === m) return i
  } return -1
}

// chạy
let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle))
console.log(strStr2(haystack, needle))
