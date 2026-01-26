# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]
 
# Constraints:
# 2 <= nums.length <= 104
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# Only one valid answer exists.
 
# Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

# //Tìm 2 phần tử khác nhau trong mảng sao cho: nums[i] + nums[j] = target và trả về chỉ số (index) của 2 phần tử đó.
# +) index phải khác nhau

# =========================== CODE ================================


class Solution(object): # có class Solution để hệ thống chấm
  # cách 1: Brute Force
  # Đây là cách dùng 2 vòng lặp lồng nhau (Nested Loops).
  # Vòng lặp ngoài (i): Cầm từng số một.
  # Vòng lặp trong (j): Chạy đi tìm cặp với thằng i trong đống còn lại.
  # Time Complexity: O(n^2)
  # Space Complexity: O(1)
  def twoSum(self, nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i+1, n):
          if nums[i] + nums[j] == target:
            return [i, j]
    return []
  
  # cách 2: hash map
  # lưu key value của số vừa quét nếu ko phải là số cần tìm vào dic(vd: 11:0)
  # -> để mà khi qua những vòng lặp tiếp theo thì chỉ phải kiếm trong dic và làm tương tự cho đến khi thấy sos cần tìm
  # -> trả về value của key đó với lại i là xong
  # Time Complexity: O(n) : chỉ duyệt tối đa len(nums) lần nên đỡ phức tạp hơn
  # Space Complexity: O(n) : Tốn bộ nhớ để lưu cái dict seen. Mảng càng to thì dict càng to
  def twoSum2(self, nums, target):
    seen = {}
    for i, num in enumerate(nums):
      need = target - num
      if need in seen:
        return [seen[need], i]
      seen[num] = i # chỗ này seen[key] =  value nha, má bị lộn sang array nên lú
    return []

# chạy
sol = Solution()
nums_input = [3,2,4]
target_input = 6
print(sol.twoSum(nums_input, target_input))
print(sol.twoSum2(nums_input, target_input))

# lifeCycle
# cách 2:
# vòng lặp 1: i = 0
# enumerate nó duyệt qua mảng nums, nhả ra i = 0, num = 3
# tính số cần tìm: need = target - num => need = 3 
# nó kiểm tra cái số need nó có trong cái dic seen ko
# -> ko thấy có: nhét key value là 3:0 vào trong seen

# vòng lặp 2: i = 1, num = 2
# need = 6 - 2 = 4
# kiếm 4 trong seen(seen đang có: {3:0})
# ko có -> seen[2] = 1 (seen đang có {3:0,2:1})

# vòng 3: i = 2, num = 4
# need = 6 - 4 = 2
# kiếm 2 trong seen -> đã thấy 2 có value là 1
# return [seen[need], i] => [1, 2]
