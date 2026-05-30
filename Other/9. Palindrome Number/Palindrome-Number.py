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
# Dùng vòng lặp bóc từng chữ số cuối của x rồi xây dựng lại reversed_num. 
# Cuối cùng so xem nó có bằng cái số original ban đầu không.
# Công thức: reversed_num = reversed_num * 10 + x % 10
# reversed_num * 10: Đây là phép "dịch trái". Khi nhân 10, nó đẩy toàn bộ các chữ số hiện tại 
# sang bên trái một hàng để nhường chỗ trống ở hàng đơn vị cho thằng mới vào.
# Time Complexity: O(log_{10}(n)) – Vòng lặp chạy theo số lượng chữ số của x.
# Space Complexity: O(1) – Chỉ tốn vài cái biến tạm, ko tốn thêm mảng hay chuỗi gì cả. Ngon hơn cách 1 rồi.
def isPalindrome2(x):
  org = x
  reversed_num = 0
  while (x > 0):
    reversed_num = reversed_num * 10 + x % 10
    x //= 10
  return org == reversed_num

# cách 3: tối ưu nhất với REVERSE HALF NUMBER
# Logic: chạy vòng lặp cho đến khi cái số đảo ngược reverted_num 
# lớn hơn hoặc bằng cái số x còn lại. Lúc thì đó đã đi đến giữa số rồi.
# Time Complexity: O(log_{10}(n)).
# Space Complexity: O(1).
def isPalindrome3(x):
  if x < 0 or (x % 10 == 0 and x != 0):
    return False
  reversed_num = 0
  while x > reversed_num:
    reversed_num = reversed_num * 10 + x % 10
    x //= 10
  # Trường hợp số chữ số chẵn: x == reverted_num (ví dụ 1221 -> 12 == 12)
  # Trường hợp số chữ số lẻ: x == reverted_num // 10 (ví dụ 121 -> 1 == 12 // 10)
  return x == reversed_num or x == reversed_num // 10
# chạy
x = -121
print(isPalindrome(x))
print(isPalindrome2(x))
print(isPalindrome3(x))

# Trong Python, đôi khi cái "cách ngu" (dùng String) lại chạy nhanh hơn cái "cách khôn" (dùng Toán).
# Tại sao? Vì hàm str(x) và kỹ thuật slicing [::-1] của Python được viết bằng ngôn ngữ C cực tối ưu ở tầng dưới.
# Còn cái vòng lặp while với phép toán % và // là chạy trên tầng bytecode của Python, nên nó chậm hơn.