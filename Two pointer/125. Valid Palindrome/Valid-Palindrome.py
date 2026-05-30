# A phrase is a palindrome if, after converting all uppercase letters into 
# lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
# Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

# Example 1:
# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.

# Example 2:
# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.

# Example 3:
# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.
 
# Constraints:
# 1 <= s.length <= 2 * 105
# s consists only of printable ASCII characters.

class Solution(object):
  # cách 1: cách ngu dùng build-in bừa bãi
  # Logic: Dùng filter hoặc join để giữ lại mấy ký tự là chữ và số (isalnum()),
  # tiện tay hạ lùn nó xuống (lower()).
  # Tạo ra một chuỗi mới là bản đảo ngược của chuỗi vừa lọc. Sau đó so sánh hai chuỗi đó.
  # Time Complexity: O(n) - phải duyệt cái chuỗi mấy lần liền (lọc, đảo, so sánh).
  # Space Complexity: O(n) - tạo ra một cái chuỗi clean_s mới, tốn RAM vãi. Ko ai đi làm thực tế lại dùng cách này với dữ liệu lớn cả.
  def isPalindrome(self, s):
    clean_s = "".join(char.lower() for char in s if char.isalnum())
    return clean_s == clean_s[::-1] #(Slicing)
  
  #cách 2: đỡ ngu hơn với Two Pointers trên chuỗi sạch
  # logic: Vẫn phải lọc sạch chuỗi thành clean_s.
  # Đặt left = 0, right = len(clean_s) - 1.
  # Cho hai thằng chạy vào giữa, thằng nào lệch sóng là False luôn.
  # Time Complexity: O(n).
  # Space Complexity: Vẫn là O(n) vì cái đống clean_s. Vẫn chưa phải là tối ưu nhất đâu.
  def isPalindrome2(self, s):
    clean_s = "".join(char.lower() for char in s if char.isalnum())
    i,j = 0, len(clean_s) -1
    while i < j:
      if clean_s[i] != clean_s[j]:
        return False
      i += 1
      j -= 1
    return True
  
  # cách 3: Đỉnh cao
  # Logic:
  # Đặt hai con trỏ l và r ở hai đầu chuỗi gốc s.
  # Dùng vòng lặp:
  # - Nếu thằng l đang chỉ vào rác, bước tiếp sang phải.
  # - Nếu thằng r đang chỉ vào rác, bước tiếp sang trái.
  # - Nếu cả hai đều là "hàng xịn", so sánh (đã viết thường). Lệch là cút.
  # Lặp cho đến khi l >= r.
  # Time Complexity: O(n) - Duyệt đúng một lần duy nhất qua cái chuỗi.
  # Space Complexity: O(1) - Chỉ tốn vài cái biến l, r lẻ tẻ. Đây là chân lý, là sự tối ưu mà Stack Overflow tôn thờ.
  def isPalindrome3(self, s):
    i,j = 0, len(s) -1
    while i < j:
      while i < j and not s[i].isalnum():
        i += 1
      while i < j and not s[j].isalnum():
        j -= 1
      if s[i].lower() != s[j].lower():
        return False
      i += 1
      j -= 1
    return True
  
  # chạy
sol = Solution()
s_input = "race a car"
print(sol.isPalindrome(s_input))
print(sol.isPalindrome2(s_input))
print(sol.isPalindrome3(s_input))