// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// cách 1: cách ngu với Manual Character Matching (VERTICAL SCANNING)
// logic: Lấy độ dài của thằng ngắn nhất trong mảng làm giới hạn (để khỏi lỗi undefined).
// Chạy một vòng lặp i từ 0 đến cái giới hạn đó.
// Bên trong, chạy tiếp một vòng lặp j để soi tất cả các chuỗi còn lại.
// Nếu thấy một thằng ko khớp, hoặc hết chuỗi nửa chừng, thì dừng ngay lập tức.
// Cộng dồn từng ký tự khớp vào một cái biến kết quả.
// Time Complexity: O(S). Về mặt lý thuyết thì vẫn là tổng số ký tự, nhưng thực tế nó chậm vì phải làm thủ công mọi thứ.
// Space Complexity: O(m) (với m là độ dài của prefix). thay vì trả về substring 
// (chỉ là tham chiếu hoặc tối ưu hơn), lại đi cộng dồn res += char. 
// Trong JS, string là immutable, mỗi lần cộng dồn là nó tạo một cái string mới trong bộ nhớ. 
// Thằng nào code như này đi làm thật sếp nó đuổi mẹ từ vòng gửi xe.
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ""
  let res = ""
  // Giả sử lấy thằng đầu tiên làm mốc, duyệt từng ký tự của nó
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]
    // So với tất cả các thằng còn lại trong mảng
    for (let j = 1; j < strs.length; j++) {
      // Nếu thằng j hết chữ hoặc ký tự thứ i của nó ko giống char
      if (i >= strs[j].length || strs[j][i] !== char) return res
    }
    res += char
  } return res
}

// chạy
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))