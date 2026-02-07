// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 
// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// cách 1: 2 loop
// Logic: Dùng 2 vòng for. Vòng i chốt ngày mua, vòng j chạy sau đó để tìm ngày bán có lãi nhất.
// Time Complexity: O(n^2). Duyệt n lần n.
// Space Complexity: O(1).
const maxProfit = (s) => {
  let maxP = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let profit = s[j] - s[i]
      if (profit > maxP) maxP = profit
    }
  } return maxP
}

// cách 2: sliding window
// Logic: Dùng hai con trỏ left (mua) và right (bán). Nếu giá ngày bán rẻ hơn ngày mua,
// trượt cái left tới ngay chỗ right để bắt đáy mới. Nếu giá Right cao hơn, tính lãi rồi dịch Right sang ngày kế tiếp.
// Time Complexity: O(n).
// Space Complexity: O(1).
const maxProfit2 = (s) => {
  let i = 0
  let j = 1
  let maxP = 0
  while (j < s.length) {
    if (s[j] < s[i]) {
      i = j
    }
    else {
      let profit = s[j] - s[i]
      maxP = Math.max(maxP, profit) 
    }
    j ++
  } return maxP
}

// chạy
const s = [7,1,5,3,6,4]
console.log(maxProfit(s))
console.log(maxProfit2(s))