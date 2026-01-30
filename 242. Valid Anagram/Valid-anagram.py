from collections import Counter
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# Example 1:
# Input: s = "anagram", t = "anagram"
# Output: true

# Example 2:
# Input: s = "rat", t = "car"
# Output: false
 
# Constraints:
# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

# Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
class Solution(object):
  # cách ngu với brute force/sort
  # Logic: Nếu hai chuỗi có cùng số lượng ký tự giống nhau, khi xếp theo bảng chữ cái chúng phải khớp nhau 100%.
  # Time Complexity: O(n \log n) – Do thuật toán sắp xếp (Timsort của Python) nó ngốn thế đấy.
  # Space Complexity: O(1) hoặc O(n) - Tùy thuộc vào việc ngôn ngữ sử dùng nó tạo bản sao chuỗi khi sort hay không
  def isAnagram(self, s, t):
    if len(s) != len(t):
      return False
    return sorted(s) == sorted(t)
  
  # cách 2: đỡ ngu hơn với hash map/dic
  # Logic: Tạo hai cái từ điển để lưu số lần xuất hiện của từng ký tự. 
  # Cuối cùng so sánh xem hai cái từ điển đó có giống hệt nhau không.
  # Time Complexity: O(n) – chỉ duyệt qua chuỗi đúng một lần. Nhanh hơn hẳn cách 1
  # Space Complexity: O(k) – Với k là số lượng ký tự phân biệt (tối đa 26 nếu chỉ là chữ cái thường).
  def isAnagram2(self, s, t):
    if len(s) != len(t):
      return False
    countS, countT = {}, {}
    for i in range(len(s)):
      countS[s[i]] = countS.get(s[i], 0) + 1
      countT[t[i]] = countT.get(t[i], 0) + 1
    return countS == countT
  # cách 3: tối ưu với 1 hash map duy nhất
  # Ko cần đến 2 cái từ điển cho tốn RAM. Một cái là đủ rồi.
  # Bước 1: Nếu độ dài 2 chuỗi đéo bằng nhau -> False luôn..
  # Bước 2 (Vòng lặp 1 - "Ghi nợ"): duyệt qua chuỗi s. 
  # Cứ thấy ký tự nào thì ghi vào sổ nợ (count) là thằng s đang giữ 1 cái.
  # Bước 3 (Vòng lặp 2 - "Đòi nợ"): duyệt qua chuỗi t. 
  # Thằng t phải đưa ra đúng những gì thằng s đã ghi.
  # Nếu thằng t đưa ra một ký tự mà trong sổ ko có (hoặc số lượng đã bị trừ hết về 0) 
  # -> False ngay lập tức. Ko cần chạy nốt chuỗi làm gì cho tốn điện.
  # Bước 4: Nếu vượt qua được vòng lặp 2 mà không bị đuổi cổ -> True.
  # Time Complexity: O(n).
  # Space Complexity: O(26) hay là O(1) vì bảng chữ cái chỉ có bấy nhiêu thôi.
  def isAnagram3(self, s, t):
    if len(s) != len(t):
      return False
    count = {}
    for i in s:
      count[i] = count.get(i, 0) + 1
    for j in t:
      if j not in count or count[j] == 0:
        return False
      count[j] -= 1
    return True
  # cách dùng thư viện
  # Khi gọi Counter(s), bên trong Python nó thực hiện một vòng lặp for y hệt như cái Cách 2.
  # Nó khởi tạo một cái Dictionary đặc biệt (gọi là Counter object).
  # Nó duyệt qua từng ký tự trong chuỗi s.
  # Nó đếm số lần xuất hiện và lưu vào Dictionary đó.
  def isAnagram4(self, s, t):
    return Counter(s) == Counter(t)

# chạy
sol = Solution()
s_input = "aacc" 
t_input = "ccac"
print(sol.isAnagram(s_input, t_input))
print(sol.isAnagram2(s_input, t_input))
print(sol.isAnagram3(s_input, t_input))
print(sol.isAnagram4(s_input, t_input))
        
