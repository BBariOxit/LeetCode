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

// cách 1: Manual Character Matching (VERTICAL SCANNING)
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

// cách 2 : cũng là Vertical Scanning nhưng với substring/slice (được coi là cực kỳ tối ưu :)
// logic: Lấy độ dài của thằng ngắn nhất trong mảng làm giới hạn (để khỏi lỗi undefined).
// Chạy một vòng lặp i từ 0 đến cái giới hạn đó.
// Bên trong, chạy tiếp một vòng lặp j để soi tất cả các chuỗi còn lại.
// Nếu thấy một thằng ko khớp, hoặc hết chuỗi nửa chừng, thì dừng ngay lập tức.
// Cộng dồn từng ký tự khớp vào một cái biến kết quả.
// Time Complexity: O(S) với S là tổng số ký tự. Nhưng thực tế nó thường nhanh hơn Cách 4
// vì nó dừng ngay lập tức khi thấy một thằng "lệch pha", ko cần đợi duyệt hết chuỗi mẫu.
// Space Complexity: O(1). ko tốn thêm giọt tài nguyên nào.
const longestCommonPrefix2 = (strs) => {
  if (!strs || strs.length === 0) return ""
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || char !== strs[j][i]) {
        // return strs[0].substring(0, i)
        return strs[0].slice(0, i)
      }
    }
    // Nếu chạy hết thằng đầu mà vẫn khớp hết thì nó chính là prefix
  } return strs[0]
}

//cách 3: Horizontal Scanning
// Cách này cứ lôi thằng đầu ra làm mẫu rồi gọt dần. Dùng nhiều trong thực tế vì nó trực quan, ko làm màu
// Time Complexity: O(S) với S là tổng số ký tự của tất cả các chuỗi, phải soi gần như toàn bộ đống chữ.
// Space Complexity: O(1). ko dùng thêm cái mảng hay object nào để chứa rác cả, chỉ tốn vài byte cho cái biến prefix.
const longestCommonPrefix3 = (strs) => {
  if (!strs.length) return ""
  // Giả định thằng đầu tiên là tiền tố chung
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    // Trong khi thằng tiếp theo ko bắt đầu bằng prefix
    while (strs[i].indexOf(prefix) !== 0) {
      // Chặt bớt 1 ký tự cuối của prefix đi
      prefix = prefix.slice(0, prefix.length - 1)
      // Chặt đến mức ko còn gì thì trả về rỗng luôn
      if (prefix === "") return ""
    }
  } return prefix
}
// cách 4: sorting , ko tối ưu lắm :)))
// Cách này khôn ở chỗ: chỉ cần so thằng "nhỏ nhất" và thằng "lớn nhất" sau khi đã sắp xếp theo bảng chữ cái.
// Cái gì chung của 2 thằng khác biệt nhất này thì chắc chắn là cái chung của cả lũ.
// Time Complexity: O(N K log N) (Với N là số chuỗi, K là độ dài trung bình). Tốn thời gian nhất là ở cái hàm sort().
// Space Complexity: O(1) hoặc O(K) tùy thuộc vào cách cái hàm sort() của engine V8 (NodeJS/Chrome) nó vận hành ngầm bên dưới.
const longestCommonPrefix4 = (strs) => {
  if (!strs.length) return ""
  // Sắp xếp mảng để thằng 'bé nhất' và 'lớn nhất' về hai đầu
  strs.sort();
  let first = strs[0]
  let last = strs[strs.length - 1]
  let i = 0

  while (i < first.length && first[i] === last[i]) {
    i++
  }
  return first.slice(0, i)
}

// chạy
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix2(strs))
console.log(longestCommonPrefix3(strs))
console.log(longestCommonPrefix4(strs))