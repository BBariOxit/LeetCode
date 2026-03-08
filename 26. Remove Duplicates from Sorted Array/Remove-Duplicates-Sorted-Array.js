// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.
// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 
// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.


// cách 1: ngu với dùng hàm bừa bãi
// Logic: Thấy trùng thì cắt. Cắt xong thì lùi i để kiểm tra lại chỗ vừa cắt.
// Time Complexity: O(n^2) (Vòng lặp n nhân với splice cũng tốn n để dời phần tử). 
// Space Complexity: O(1). 
const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length -1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  } return nums.length
}

// nếu đề ko yêu cầu in-place
// Cách này tạo mảng mới, KHÔNG phù hợp với bài toán In-place
// Logic: Nhét hết vào Set cho nó tự lọc, xong đổ ngược lại mảng cũ.
// Time Complexity: O(n).
// Space Complexity: O(n) (Tốn thêm bộ nhớ cho cái Set và mảng phụ).
const removeDuplicates3 = function(nums) {
  let unique = [...new Set(nums)]
  for (let i = 0; i< unique.length; i++) {
    nums[i] = unique[i]
  } return unique.length
}

// cách tối ưu nhất với two pointer
// Logic: Chỉ ghi đè khi thấy số khác biệt. Ko quan tâm bọn trùng lặp phía sau.
// Time Complexity: O(n) (Chạy đúng một mạch từ đầu tới cuối).
// Space Complexity: O(1) (Ko tốn thêm mảng hay object nào, dùng đúng biến chạy).
const removeDuplicates2 = function(nums) {
  if (nums.length === 0) return 0
  let i = 0
  for (let j =1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}




// chạy
nums = [1,1,2]
console.log(removeDuplicates(nums))
console.log(removeDuplicates2(nums))
console.log(removeDuplicates3(nums))