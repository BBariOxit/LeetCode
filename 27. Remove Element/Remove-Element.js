// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.
// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

// cách ngu với plice
// Logic: Duyệt qua mảng, thấy val thì dùng splice vứt nó đi.
// Time Complexity: O(n^2). tại vì mỗi lần splice, thằng JS phải dồn toàn bộ đám đứng sau lên phía trước.
// n lần duyệt nhân với n lần dồn, chậm như rùa bò.
// Space Complexity: O(1). Ít nhất thì cũng ko tốn thêm mảng mới.
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  } return nums.length
}

// cách 2 nếu đề bài ko yêu cầu in-place: dùng mảng phụ/filter
// Logic: Lọc hết mấy thằng tử tế ra một mảng mới, rồi đổ ngược lại mảng cũ.
// Time Complexity: O(n). Duyệt mảng 2 lần (1 lần filter, 1 lần copy).
// Space Complexity: O(n). Phải tạo thêm cái mảng result. 
// Nếu cái mảng đầu vào có 1 tỷ phần tử thì RAM máy nổ con mẹ nó luôn. 
const removeElement2 = (nums, val) => {
  let newArr = nums.filter(num => num !== val)
  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i]
  }
  return newArr.length
}

// cách tối ưu nhất: Two Pointers
// Logic: Thằng i đi thám thính, thằng nào ngon thì đưa cho thằng k giữ. Kết thúc là xong
// Time Complexity: $O(n)$. Chỉ chạy đúng một vòng for duy nhất từ đầu đến cuối. siu nhanh
// Space Complexity: $O(1)$. ko tốn thêm cái byte nào cho mảng phụ. 
// Đúng chuẩn "In-place" mà cái Judge nó yêu cầu.
const removeElement3 = (nums, val) => {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  } return k
}

// chạy
let nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val))
console.log(removeElement2(nums, val))
console.log(removeElement3(nums, val))