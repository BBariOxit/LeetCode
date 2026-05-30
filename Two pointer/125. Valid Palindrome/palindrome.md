## Palindrome là cái gì?
Hiểu đơn giản: Nó là một chuỗi ký tự (hoặc số) mà đọc xuôi hay đọc ngược đều giống y hệt nhau.

Tưởng tượng cái chuỗi đó như một cái gương đặt ở chính giữa, nửa bên trái nhìn vào gương phải thấy y hệt nửa bên phải.
Ví dụ chữ: "RADAR", "LEVEL", "MADAM", "TENET". Đảo ngược lại nó vẫn thế, ko chạy đi đâu được.
Ví dụ số: 121, 12321, 6996.

## Trong thế giới của bọn Dev (Lập trình)
Đối với mấy thằng code , Palindrome không chỉ là cái chữ vô hồn. Nó là một bài toán xử lý chuỗi kinh điển.
Khi làm việc với Palindrome, ta phải đối mặt với mấy thứ hãm sau:
- Case sensitivity: Chữ "A" với "a" có tính là giống nhau không? Thường thì là `CÓ`.
- Special characters: Dấu cách, dấu phẩy, dấu chấm có tính không? Đề bài thường bắt vứt mẹ nó đi trước khi kiểm tra.
- Tối ưu: Đừng có dại mà đảo ngược cả cái chuỗi rồi so sánh (tốn bộ nhớ lắm). Cách của dân chuyên nghiệp là dùng Two Pointers (hai con trỏ): một thằng đứng đầu, một thằng đứng cuối, rồi cho chúng nó bò vào giữa để soi nhau.