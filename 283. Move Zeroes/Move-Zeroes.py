# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# Example 1:
# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]

# Example 2:
# Input: nums = [0]
# Output: [0]


# Constraints:
# 1 <= nums.length <= 104
# -231 <= nums[i] <= 231 - 1
 
# Follow up: Could you minimize the total number of operations done?

# cách ngu với Remove & Append
# Logic: Đếm số lượng số 0, sau đó cứ tìm con 0 đầu tiên thì xóa đi rồi ném vào cuối mảng.
# Time Complexity: O(n^2) (Vì count là O(n), và remove trong vòng lặp cũng là O(n)).
# Space Complexity: O(1).
def moveZeroes(nums):
  for i in range(nums.count(0)):
    nums.remove(0)
    nums.append(0)

# biết tư duy chút với Ghi đè - Overwrite
# Logic: Dùng một biến pos để đánh dấu vị trí cần điền số khác 0. 
# Điền xong thì phần còn lại của mảng chắc chắn là số 0.
# Time Complexity: O(n) (Duyệt mảng 2 lần độc lập, vẫn là tuyến tính).
# Space Complexity: O(1).
def moveZeroes2(nums):
  pos = 0
  for i in range(len(nums)):
    if nums[i] != 0:
      nums[pos] = nums[i]
      pos += 1
  for i in range(pos, len(nums)):
    nums[i] = 0
# chạy
nums = [0,1,0,3,12]
moveZeroes(nums)
print(nums)

nums2 = [0,1,0,3,12]
moveZeroes2(nums2)
print(nums2)