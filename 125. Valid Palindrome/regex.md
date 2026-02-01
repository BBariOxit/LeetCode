# REGEX LÀ CÁI GÌ?
Regex (Regular Expression) là một ngôn ngữ mô tả mẫu (pattern). Nó dùng một chuỗi các ký tự đặc biệt để tạo ra một cái "lưới lọc", giúp tìm kiếm, chỉnh sửa hoặc quản lý văn bản như một vị thần.

# CÁC "BINH CHỦNG" TRONG REGEX (PHÂN LOẠI)
Để làm chủ Regex, phải thuộc lòng 4 nhóm quân bài tẩy này:
## A. Nhóm Ký tự đại diện (Character Classes)
Mấy thằng này dùng để chỉ đích danh loại quân muốn bắt.
- \d: (Digits) Số (0-9).
- \D: (NOT Digits) Ko phải số.
- \w: (Word) Chữ cái, số và dấu gạch dưới _.
- \W: (NOT Word) Ko phải chữ/số (dấu cách, phẩy, chấm...).
- \s: (Space) Khoảng trắng (space, tab, xuống dòng).
- .: (Wildcard) Bất cứ cái gì cũng được (trừ xuống dòng).
- [abc]: Chỉ chọn thằng 'a', 'b', hoặc 'c'.
- [^abc]: Chọn tất cả `TRỪ` thằng 'a', 'b', 'c'.
## B. Nhóm Định lượng (Quantifiers)
Muốn bắt bao nhiêu thằng?
- *: 0 hoặc nhiều (Có cũng được, đéo có cũng xong).
- +: 1 hoặc nhiều (Ít nhất phải có 1 thằng).
- ?: 0 hoặc 1 (Có thì tốt, đéo có cũng kệ - Optional).
- {n}: Đúng n lần.
- {n,}: Ít nhất n lần.
- {n,m}: Từ n đến m lần.
## C. Nhóm Vị trí (Anchors)
Muốn nó nằm ở đâu?
- ^: Phải nằm ở đầu dòng.
- $: Phải nằm ở cuối dòng.
- \b: Ranh giới từ (Word boundary - giúp tìm đúng chữ "an" chứ ko phải chữ "an" trong "banana").
## D. Nhóm Gom cụm & Hoặc (Grouping & Alternation)
- |: Phép HOẶC. Ví dụ: (mèo|chó|lợn).
- `()``: Gom nhóm lại để áp dụng định lượng hoặc trích xuất dữ liệu sau này.
# VÍ DỤ
Check số nguyên: ^\d+$	
Bắt đầu là số, có 1 hoặc nhiều số, và kết thúc luôn.

Check Email: ^[\w.-]+@[\w.-]+\.[a-z]{2,}$
Một đống chữ/số + chữ @ + tên miền + đuôi ít nhất 2 chữ.

Tìm ngày tháng:	\d{2}/\d{2}/\d{4}
Tìm dạng dd/mm/yyyy.

Dọn rác Palindrome:	[^a-zA-Z0-9]
Tìm tất cả những thằng ko phải chữ và số để xóa.
# NHỮNG ĐIỀU CẦN BIẾT
Raw Strings (Trong Python): Luôn dùng r'pattern' để tránh bị Python hiểu nhầm dấu \ là ký tự thoát (escape character).

Greedy vs Non-greedy: Mặc định Regex rất "tham lam" (*, +). Nó sẽ hốt sạch những gì có thể. Thêm dấu ? phía sau (ví dụ *?) để nó trở nên "khiêm tốn", chỉ hốt vừa đủ.

Flag:
- g: Global (tìm hết chuỗi).
- i: Ignore case (đéo phân biệt hoa thường).
- m: Multiline (xét trên nhiều dòng).
# HẠN CHẾ VÀ "CÁI BẪY" CHẾT NGƯỜI
- Readability (Độ đọc hiểu): Một cái Regex phức tạp nhìn ko khác gì đống cứt mèo. Thằng viết sau 2 tuần nhìn lại cũng ko hiểu mình viết gì.
- Performance (Hiệu năng): Như đã nói, Catastrophic Backtracking có thể làm CPU nhảy lên 100% và treo server nếu pattern quá ngu.
- Đừng dùng Regex cho HTML/XML: HTML nó có cấu trúc cây phức tạp, Regex ko đủ trình để xử lý mấy cái thẻ lồng nhau vô tận đâu. Dùng thư viện chuyên dụng như BeautifulSoup (Python) hay DOMParser (JS) đi.