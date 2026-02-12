# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000
# For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.\

# Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

# I can be placed before V (5) and X (10) to make 4 and 9. 
# X can be placed before L (50) and C (100) to make 40 and 90. 
# C can be placed before D (500) and M (1000) to make 400 and 900.
# Given a roman numeral, convert it to an integer.

# Example 1:
# Input: s = "III"
# Output: 3
# Explanation: III = 3.

# Example 2:
# Input: s = "LVIII"
# Output: 58
# Explanation: L = 50, V= 5, III = 3.

# Example 3:
# Input: s = "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
# Constraints:
# 1 <= s.length <= 15
# s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
# It is guaranteed that s is a valid roman numeral in the range [1, 3999].

# cách 1: if-else
# Logic: Duyệt từ đầu, so sánh với thằng tiếp theo. Phải check i + 1 < len(s) 
# vì Python ko có trò trả về undefined như JS, nó sẽ vả IndexError.
# Time Complexity: O(n)
# Space Complexity: O(1)
def romanToInt(s):
  total = 0
  def getValue(c):
    if c == 'I': return 1
    elif c =='V': return 5
    elif c == 'X': return 10
    elif c == 'L': return 50
    elif c == 'C': return 100
    elif c == 'D': return 500
    elif c == 'M': return 1000
    return 0

  for i in range(len(s)):
    curr = getValue(s[i])
    if i + 1 < len(s) and curr < getValue(s[i + 1]):
      total -= curr
    else:
      total += curr
  return total
# cách 2: match-case, tương tự với if-else
def romanToInt2(s):
  total = 0
  def getValue2(c):
    match c:
      case 'I': return 1
      case 'V': return 5
      case 'X': return 10
      case 'L': return 50
      case 'C': return 100
      case 'D': return 500
      case 'M': return 1000
      case _: return 0

  for i in range(len(s)):
    curr = getValue2(s[i])
    if i + 1 < len(s) and curr < getValue2(s[i + 1]):
      total -= curr
    else:
      total += curr
  return total

# cách 3: dùng dict và trick lỏ: replace
def romanToInt3(s):
  s = s.replace('IV', 'IIII').replace('IX', 'VIIII')
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC")

  obj = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  return sum(obj[i] for i in s)

# 
def romanToInt4(s):
  replacements = [("IV", "IIII"), ("IX", "VIIII"), ("XL", "XXXX"), ("XC", "LXXXX"), ("CD", "CCCC"), ("CM", "DCCCC")]
  for old, new in replacements:
    s = s.replace(old, new)
  obj = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  return sum(obj[i] for i in s)

# chạy
s = "MCMXCIV"
print(romanToInt(s))
print(romanToInt2(s))
print(romanToInt3(s))
print(romanToInt4(s))