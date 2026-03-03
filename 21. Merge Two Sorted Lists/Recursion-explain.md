## 1. GIAI ĐOẠN ĐI VÀO (RECURSION CALLS)
Mỗi bước là một lần hàm tự gọi chính nó. Máy tính sẽ "đóng băng" trạng thái hiện tại để nhảy vào tầng sâu hơn.

Bước 1: list1 = [1,2,4], list2 = [1,3,4]
- So sánh: 1 (l1) vs 1 (l2). Bằng nhau thì theo code nó rơi vào else (chọn list2).
- Treo máy: Node(1 của l2).next = mergeTwoLists([1,2,4], [3,4])
- Trạng thái: Đang đợi kết quả để nối vào sau con số 1 của list2.

Bước 2: list1 = [1,2,4], list2 = [3,4]
- So sánh: 1 (l1) vs 3 (l2). 1 nhỏ hơn.
- Treo máy: Node(1 của l1).next = mergeTwoLists([2,4], [3,4])
- Trạng thái: Đang đợi để nối vào sau con số 1 của list1.

Bước 3: list1 = [2,4], list2 = [3,4]
- So sánh: 2 (l1) vs 3 (l2). 2 nhỏ hơn.
- Treo máy: Node(2 của l1).next = mergeTwoLists([4], [3,4])
- Trạng thái: Đang đợi để nối vào sau con số 2.

Bước 4: list1 = [4], list2 = [3,4]
- So sánh: 4 (l1) vs 3 (l2). 3 nhỏ hơn.
- Treo máy: Node(3 của l2).next = mergeTwoLists([4], [4])
- Trạng thái: Đang đợi để nối vào sau con số 3.

Bước 5: list1 = [4], list2 = [4]
- So sánh: 4 (l1) vs 4 (l2). Rơi vào else (chọn list2).
- Treo máy: Node(4 của l2).next = mergeTwoLists([4], null)

Bước 6 (Chạm đáy): list1 = [4], list2 = null
- Gặp: if (!list2) return list1;

HÀNH ĐỘNG: Trả về nguyên cái Node(4) của list1. BẮT ĐẦU QUAY XE!

## 2. GIAI ĐOẠN QUAY VỀ (BACKTRACKING & RETURNING)
Bây giờ là lúc "trả nợ". Kết quả từ tầng dưới sẽ được ném lên tầng trên để nối xích.

Tầng 5 nhận về Node(4):
- Nối: Node(4 của l2).next = Node(4).
- Return: 4 -> 4

Tầng 4 nhận về 4 -> 4:
- Nối: Node(3 của l2).next = (4 -> 4).
- Return: 3 -> 4 -> 4

Tầng 3 nhận về 3 -> 4 -> 4:
- Nối: Node(2 của l1).next = (3 -> 4 -> 4).
- Return: 2 -> 3 -> 4 -> 4

Tầng 2 nhận về 2 -> 3 -> 4 -> 4:
- Nối: Node(1 của l1).next = (2 -> 3 -> 4 -> 4).
- Return: 1 -> 2 -> 3 -> 4 -> 4

Tầng 1 nhận về 1 -> 2 -> 3 -> 4 -> 4:
- Nối: Node(1 của l2).next = (1 -> 2 -> 3 -> 4 -> 4).
- Return: 1 -> 1 -> 2 -> 3 -> 4 -> 4 (Đây là kết quả cuối cùngnhận được).