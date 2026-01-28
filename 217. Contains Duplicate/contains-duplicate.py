# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:
# Input: nums = [1,2,3,1]
# Output: true
# Explanation:
# The element 1 occurs at the indices 0 and 3.

# Example 2:
# Input: nums = [1,2,3,4]
# Output: false
# Explanation:
# All elements are distinct.

# Example 3:
# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

# Constraints:
# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109

class Solution(object):
  # cách 1: cách code ngu với Brute Force
  # Logic: Dùng 2 vòng lặp lồng nhau
  # Duyệt từng phần tử, rồi lại duyệt lại mảng để tìm nó
  # Time Complexity: O(n^2)
  # Space Complexity: O(1)
  def containsDuplicate(self, nums):
    for i in range(len(nums)):
      for j in range(i + 1, len(nums)):
        if nums[i] == nums[j]:
          return True
    return False
  
  # cách 2: cách kiếm trong mảng mới, cũng ngu nốt
  # check in trong một cái List (mảng), thằng máy tính nó phải chạy 
  # từ đầu đến đít cái list đó để tìm xem số i có nằm trong đó không.
  # Time Complexity: O(n^2)
  # Kịch bản tồi tệ nhất (Worst Case): Khi cái mảng nums ko có số nào trùng nhau (ví dụ: [1, 2, 3, 4, 5]).
  # Vòng 1: newArr rỗng. Kiểm tra mất 0 bước. Thêm 1 vào.
  # Vòng 2: newArr có [1]. Kiểm tra mất 1 bước. Thêm 2 vào.
  # Vòng 3: newArr có [1, 2]. Kiểm tra mất 2 bước. Thêm 3 vào....
  # Vòng n: newArr có n-1 phần tử. Kiểm tra mất n-1 bước. => chậm vl nếu nhiều phần tử
  # Space Complexity: O(n)
  def containsDuplicate2(self, nums):
    newArr = []
    for i in nums:
      if i in newArr:
        return True
      else:
        newArr.append(i)
    return False
  
  # cách 3: cách đỡ ngu hơn với Sorting
  # Khi sắp xếp mảng, các số giống nhau sẽ đứng cạnh nhau
  # Lúc này chỉ cần so sánh thằng đứng trước với thằng đứng liền sau nó là xong.
  # Logic: Sort mảng -> Duyệt 1 lần -> So sánh nums[i] và nums[i+1]
  # Time Complexity: O(n log n)
  # Space Complexity: O(1) hoặc O(log n) tùy thuật toán sort
  def containsDuplicate3(self, nums):
    nums.sort()
    for i in range(len(nums) -1):  # tại sao phải -1, vì đễn thằng cuối nó ko thể so sánh với thằng đứng sau nó (bởi vì có đâu mà so sánh :))
      if nums[i] == nums[i + 1]:
        return True
    return False
  
  # cách 4: dùng Hash Set => tối ưu nhất
  # Dùng một cái Set (Bảng băm). Đi qua từng số, ném nó vào Set.
  # Trước khi ném thì ngó xem trong Set có nó chưa. Check trong Set chỉ tốn O(1) thôi (tức thì).
  # Time Complexity: O(n)
  # Space Complexity: O(n)
  # tính ra ko khác gì với cách dùng mảng, nhưng mà tối ưu hơn với hash set
  def containsDuplicate4(self, nums):
    seen = set()
    for i in nums:
      if i in seen:
        return True
      seen.add(i)
    return False
  
# chạy
sol = Solution()
nums_input = [1,2,3,4]
print(sol.containsDuplicate(nums_input))
print(sol.containsDuplicate2(nums_input))
print(sol.containsDuplicate3(nums_input))
print(sol.containsDuplicate4(nums_input))