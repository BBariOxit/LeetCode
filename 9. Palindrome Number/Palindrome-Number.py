# Given an integer x, return true if x is a palindrome, and false otherwise.

# Example 1:
# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

# Example 2:
# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:
# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

# Constraints:
# -231 <= x <= 231 - 1

# Follow up: Could you solve it without converting the integer to a string?

# cách 1: STRING CONVERSION (ngu)
# Logic: Chuyển số thành chuỗi, sau đó dùng kỹ thuật s[::-1] để đảo ngược chuỗi và so sánh với chuỗi gốc.
# Time Complexity: O(n) với n là số chữ số
# Space Complexity: O(n) vì mày phải tạo ra một cái chuỗi mới chiếm bộ nhớ.
def isPalindrome(x):
  s = str(x)
  if s == s[::-1]:
    return True
  return False

# cách 2: đỡ ngu hơn với REVERSE FULL NUMBER
# Công thức: reversed_num = reversed_num * 10 + x % 10
# reversed_num * 10: Đây là phép "dịch trái". Khi nhân 10, nó đẩy toàn bộ các chữ số hiện tại 
# sang bên trái một hàng để nhường chỗ trống ở hàng đơn vị cho thằng mới vào.
def isPalindrome2(x):
  org = x
  reversed_num = 0
  while (x > 0):
    reversed_num = reversed_num * 10 + x % 10
    x //= 10
  return org == reversed_num
# chạy
x = 121
print(isPalindrome(x))
print(isPalindrome2(x))
