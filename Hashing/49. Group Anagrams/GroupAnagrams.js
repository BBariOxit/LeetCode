// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

//Giải pháp ở đây là phải xài Hash Map (trong JS xài Map hoặc dùng luôn Object làm map cho lẹ).
// Key của Hash Map sẽ là cái "đặc điểm nhận dạng" chung.
// Value sẽ là một cái mảng (Array) chứa các chuỗi ban đầu khớp với cái Key đó.
// Vấn đề cốt lõi bây giờ chỉ là: Làm gì để tạo ra cái Key chuẩn nhất?

// Cách 1: Xài Sorting (Dễ code, clean code, anh em hay xài nhất)
// Tư duy: Bất kể 2 chữ Anagram nó đảo lộn cỡ nào, chỉ cần đem băm nó ra thành mảng ký tự,
// sắp xếp (sort) lại theo bảng chữ cái, rồi ghép lại thành chuỗi, thì chúng nó sẽ ra kết quả y chang nhau!
// Ví dụ: "eat", "tea", "ate" sau khi sort thì đều biến thành "aet".
// Thực thi: duyệt qua từng chữ. Lấy chữ đó sort đi để ra cái Key (như "aet").
// Check xem trong Hash Map có cái Key này chưa? Chưa có thì tạo một mảng mới chứa chữ đó.
// Có rồi thì push chữ đó vào mảng cũ.

const groupAnagrams = function(strs) {
  let obj = {}
  for (let str of strs) {
    let key = str.split('').sort().join('')
    if (!obj[key]) {
      obj[key] = []
    }
    obj[key].push(str)
  } return Object.values(obj)
}