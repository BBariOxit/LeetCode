# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

# Example 1:
# Input: prices = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

# Example 2:
# Input: prices = [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transactions are done and the max profit = 0.
 
# Constraints:
# 1 <= prices.length <= 105
# 0 <= prices[i] <= 104

# cách 1: ngu với 2 vòng lặp
# Logic: Chạy 2 vòng lặp. Vòng i chọn ngày mua, vòng j chạy từ i+1 để thử mọi ngày bán có thể.
# Tính hiệu số rồi so sánh xem cái nào to nhất.
# Time Complexity: O(n^2). Vì phải duyệt qua gần như tất cả các cặp n(n-1)/2.
# -> Mảng dài 10^5 là máy bốc khói ngay.
# Space Complexity: O(1). Chỉ tốn đúng một cái biến để lưu max_profit.
def maxProfit(prices):
  maxP = 0
  for i in range(len(prices)):
    for j in range(i+1, len(prices)):
      profit = prices[j] - prices[i]
      if profit > maxP:
        maxP = profit
  return maxP

# cách 2: đỡ ngu hơn với Sliding Window / Two Pointers
# Logic: Dùng hai con trỏ Left (ngày mua) và Right (ngày bán). 
# Nếu giá tại Right nhỏ hơn giá tại Left, nghĩa là tìm thấy điểm mua mới ngon hơn 
# -> Nhảy Left tới Right. Nếu giá Right cao hơn, tính lãi rồi dịch Right sang ngày kế tiếp.
# Time Complexity: O(n). chỉ đi từ đầu đến cuối mảng một lần duy nhất.
# Space Complexity: O(1). Tốn hai cái biến con trỏ, ko đáng kể.
def maxProfit2(prices):
  i, j = 0, 1
  maxP = 0
  while (j < len(prices)):
    if(prices[i] < prices[j]):
      profit = prices[j] - prices[i]
      maxP = max(maxP, profit)
    else:
      i = j
    j += 1
  return maxP

# cách 3: tối ưu với One Pass / Dynamic Programming
# Logic: Vừa đi vừa "nhặt" giá thấp nhất. duy trì một biến min_price là cái giá rẻ nhất từng thấy từ đầu mảng đến giờ.
# Với mỗi bước, tính xem nếu bán ở giá hiện tại thì lãi bao nhiêu so với min_price đó, rồi cập nhật max_profit.
# Time Complexity: O(n). Duyệt một vòng, nhanh
# Space Complexity: O(1). Tốn đúng 2 biến min_price và max_profit.
def maxProfit3(prices):
  minP = float('inf')
  maxP = 0
  for i in prices:
    if i < minP:
      minP = i
    elif i - minP > maxP:
      maxP = i - minP
  return maxP
# chạy
prices_input = [7,6,4,3,1]
print(maxProfit(prices_input))
print(maxProfit2(prices_input))
print(maxProfit3(prices_input))