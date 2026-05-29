// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers index1 and index2,
// each incremented by one, as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:
// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.



// cách tối ưu cho phỏng vấn/ entry test: two pointer
// Luồng chạy:
// Mày tính cái tổng tạm thời sum = numbers[left] + numbers[right]. Nó sẽ xảy ra 3 kịch bản:
// Trúng Jackpot (sum === target): BINGO! Lượm ngay 2 cái index đó, 
// cộng thêm 1 (nhớ cái bẫy 1-indexed tao nói không?) và ném ra mảng kết quả [left + 1, right + 1]. Game over!

// Tổng to quá (sum > target): Tổng đang lố cmnr. Giờ muốn tổng bé đi thì phải làm sao?
// Thằng left đang ở số nhỏ nhất rồi, kéo nó lên thì tổng chỉ có bự thêm.
// Bắt buộc phải hạ thằng right xuống! (Tức là right--, lùi sang trái để nhặt số nhỏ hơn).

// Tổng nhỏ quá (sum < target): Tổng đang yếu sinh lý. Giờ muốn nó to lên thì sao?
// Thằng right đã là thằng to nhất rồi, giữ nguyên nó.
// Mày phải tăng thằng left lên (left++, đẩy sang phải để nhặt số bự hơn).

// Cứ thế ép 2 con trỏ chạy vào giữa. Vì đề bài cam kết chắc chắn có 1 kết quả,
// 2 con trỏ kiểu gì cũng kẹp trúng đích trước khi chạm mặt nhau.
var twoSum = function(s, target) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    let sum = s[i] + s[j]
    if (sum === target) return [i+1, j+1]
    else if (sum > target) j--
    else i++
  } return []
};