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

// Sliding Window (Dùng hàm Slice)
// Logic: Kiểm tra từng vị trí i. Nếu đoạn con bắt đầu từ i khớp với needle, trả về i.
// Time Complexity: O((n - m) X m) \approx O(n X m). Trong trường hợp xấu nhất (ví dụ: aaaaaab và aab)
// Space Complexity: O(m) do hàm substring tạo ra chuỗi mới. 
// (Nếu so sánh từng ký tự bằng vòng lặp lồng nhau thì sẽ là O(1)).
const strStr3 = function(haystack, needle) {
  let n = haystack.length
  let m = needle.length
  for (let i = 0; i <= n-m; i++) {
    if (haystack.slice(i, i + m) === needle) {
      return i
    }
  } return -1
}

// Cách Tối ưu với KMP Algorithm (NÂNG CAO, nếu  muốn vào bigtech thời mới đọc ko thì rối não lắm :))
// Thuật toán Knuth-Morris-Pratt (KMP)
// Logic: Tạo một mảng bổ trợ giúp ta biết nếu thất bại ở ký tự thứ x, 
// ta có thể "nhảy" tiếp đến vị trí nào mà không cần so sánh lại từ đầu.
// Lưu ý: Điều kiện "đã match hết needle" phải kiểm tra ngay sau khi tăng needleIdx.
// Time Complexity: O(n + m). Bạn chỉ đi qua haystack đúng một lần.
// Space Complexity: O(m) để lưu mảng lps.
const strStr4 = (haystack, needle) => {
  if (!needle) return 0
  if (needle.length > haystack.length) return -1
  // Bước 1: Xây dựng mảng "Tiền tố" (LPS - Longest Prefix Suffix)
  const lps = new Array(needle.length).fill(0)
  let prevLPS = 0, i = 1
  // lps: Mảng lưu độ dài tiền tố dài nhất cũng là hậu tố.
  // prevLPS: Độ dài của tiền tố khớp trước đó.
  // i: Con trỏ chạy từ ký tự thứ 2 của needle (vì ký tự đầu tiên lps[0] luôn là 0).
  while (i < needle.length) {
    if (needle[i] === needle[prevLPS]) {
      // Nếu ký tự hiện tại khớp với ký tự tại vị trí prevLPS
      lps[i++] = ++prevLPS;
    } else if (prevLPS === 0) {
      // Nếu không khớp và prevLPS đã về 0, thì lps tại đây bằng 0
      lps[i++] = 0
    } else {
      // Đây là chỗ khó nhất: Nếu không khớp, ta "nhảy" ngược lại 
      // dựa trên giá trị lps trước đó để tìm đoạn khớp ngắn hơn
      prevLPS = lps[prevLPS - 1]
    }
  }
  // Bước 2: Duyệt qua Haystack (Tìm kiếm)
  // Sử dụng mảng lps để "nhảy" thông minh khi gặp ký tự không khớp.
  let hayIdx = 0, needleIdx = 0
  while (hayIdx < haystack.length) {
    if (haystack[hayIdx] === needle[needleIdx]) {
      // Nếu khớp, cả 2 con trỏ cùng tiến lên
      hayIdx++; needleIdx++
      // Đặt check full-match ở đây để trả kết quả ngay khi khớp đủ needle.
      if (needleIdx === needle.length) {
        // Nếu needleIdx đi hết độ dài cây kim, nghĩa là đã tìm thấy!
        return hayIdx - needle.length
      }
    } else if (needleIdx !== 0) {
      // QUAN TRỌNG: Nếu sai ở giữa chừng, needleIdx nhảy về 
      // vị trí đã được lưu trong lps thay vì quay về 0.
      needleIdx = lps[needleIdx - 1]
      // Dòng needleIdx = lps[needleIdx - 1]: Đây là lúc ta "tận dụng trí nhớ".
      // Ví dụ: Bạn đã khớp được ABCAB, nhưng ký tự tiếp theo bị sai. 
      // LPS cho bạn biết AB ở cuối giống AB ở đầu, nên bạn chỉ cần nhảy needleIdx 
      // về vị trí sau AB (vị trí số 2) để so sánh tiếp, không cần bắt đầu lại từ đầu.
    } else {
      // Nếu sai ngay từ ký tự đầu tiên của needle, chỉ tiến hayIdx
      hayIdx++
    }
  } return -1 // Duyệt hết đống rơm mà không thấy kim.
}
// chạy
let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle))
console.log(strStr2(haystack, needle))
console.log(strStr3(haystack, needle))
console.log(strStr4(haystack, needle))
