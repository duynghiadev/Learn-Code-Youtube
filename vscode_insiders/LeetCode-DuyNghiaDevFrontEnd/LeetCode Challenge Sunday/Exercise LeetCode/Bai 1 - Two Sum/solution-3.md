# Giải thích thuật toán

- Hàm `twoSum` này giải quyết bài toán tìm hai số trong một mảng số nguyên (`nums`) sao cho tổng của chúng bằng một giá trị đã cho (`target`). Hàm này sử dụng một kỹ thuật gọi là "Hash Table" hoặc "Object" trong JavaScript để giữ thông tin về các số đã xem xét.

- Dưới đây là giải thích cụ thể của thuật toán:

1. Chúng ta bắt đầu bằng việc khởi tạo một đối tượng `numIndices`. Đối tượng này sẽ được sử dụng để lưu trữ các giá trị của mảng `nums` và vị trí của chúng trong mảng.

2. Tiếp theo, chúng ta duyệt qua mảng `nums` sử dụng vòng lặp `for` với biến đếm `i`.

3. Đối với mỗi phần tử `nums[i]`, chúng ta tính giá trị `complement` bằng cách trừ giá trị hiện tại `nums[i]` từ target. `complement` là giá trị cần tìm để có tổng bằng `target`.

4. Chúng ta kiểm tra xem có tồn tại một phần tử có giá trị là `complement` trong đối tượng `numIndices` không. Nếu có (nghĩa là chúng ta đã gặp phần tử trước đó có giá trị bằng `complement`), thì trả về một mảng chứa hai giá trị là vị trí của `complement` trong mảng (`numIndices[complement]`) và vị trí hiện tại của `nums[i]` (`i`). Điều này đáp ứng yêu cầu tìm hai số có tổng bằng `target`.

5. Nếu không tìm thấy `complement` trong đối tượng `numIndices`, chúng ta lưu trữ giá trị `nums[i]` và vị trí của nó trong đối tượng `numIndices`, để kiểm tra với các phần tử tiếp theo.

6. Nếu sau khi duyệt qua toàn bộ mảng mà không tìm thấy cặp số nào thỏa mãn yêu cầu, thì chúng ta ném ra một lỗi thông báo rằng không có giải pháp nào tồn tại.

- Thuật toán này hoạt động với độ phức tạp thời gian là O(n), với n là số lượng phần tử trong mảng `nums`, vì chúng ta chỉ cần duyệt qua mảng một lần và thực hiện một số phép toán cơ bản cho mỗi phần tử. Điều này đáp ứng yêu cầu về hiệu suất O(n) được đề cập trong câu hỏi.
