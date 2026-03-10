- Nếu thuật toán "vét cạn" là một người kiên trì nhưng chậm chạp (sai là làm lại từ đầu), thì KMP (Knuth-Morris-Pratt) là một người thông minh có trí nhớ tốt.
- KMP là thuật toán tìm kiếm chuỗi giúp bạn không bao giờ phải lùi lại những gì đã đọc trong đống rơm (haystack).
### 1. Ý tưởng cốt lõi: "Tận dụng sự thất bại"
Trong cách làm thông thường, nếu đang so khớp chuỗi ABCDABCX với ABCDABCE:
- Bạn thấy 7 ký tự đầu ABCDABC đã khớp.
- Đến ký tự thứ 8 (X và E) thì sai.
- Cách cũ: Lùi lại vị trí thứ 2 trong đống rơm để bắt đầu lại.
- KMP: "Ơ, mình vừa thấy ABC ở cuối đoạn đã khớp rồi mà? Cần gì soi lại ABC đó nữa, nhảy thẳng đến ký tự sau ABC để soi tiếp thôi!"

### 2. Hai bước thực hiện của KMP
Bước A: Xây dựng mảng "Nhảy" (LPS Table)  
LPS viết tắt của Longest Prefix which is also Suffix (Tiền tố dài nhất cũng là hậu tố).  
Nó trả lời câu hỏi: "Tại vị trí này, có đoạn đầu nào giống đoạn cuối không?"  
Ví dụ với needle = "ababa":
- 1. a: LPS = 0
- 2. ab: LPS = 0
- 3. aba: a ở đầu giống a ở cuối $\rightarrow$ LPS = 1
- 4. abab: ab ở đầu giống ab ở cuối $\rightarrow$ LPS = 2
- 5. ababa: aba ở đầu giống aba ở cuối $\rightarrow$ LPS = 3  
=> Mảng LPS: [0, 0, 1, 2, 3]

Bước B: Tìm kiếm thông minh  
Khi so khớp haystack với needle:
- Nếu khớp: Cùng tiến lên.
- Nếu sai tại vị trí j của needle: Thay vì quay lại đầu, ta nhìn vào mảng LPS để biết needle nên "nhảy" về vị trí nào để tiếp tục mà không cần lùi i của haystack.

### 3. Tại sao KMP lại "vô đối"?
| Đặc điểm | Vét cạn (Brute Force) | KMP (Knuth-Morris-Pratt) |
|----------|-----------------------|--------------------------|
| Trí nhớ  | "Cá vàng" – Sai là quên hết | Nhớ được các đoạn lặp lại |
| Con trỏ  | Phải lùi lại liên tục | Chỉ tiến lên, không bao giờ lùi |
| Thời gian | O(n × m) | O(n + m) |


Ví dụ thực tế: Nếu bạn tìm một đoạn DNA dài 1 triệu ký tự trong một bộ gene tỷ ký tự, KMP sẽ chạy xong trong "nốt nhạc", còn cách vét cạn có thể chạy đến sáng mai.