# [JavaScript chuyên sâu ] - Xử lý bất đồng bộ - phần 2: Event loop trên browser và Nodejs

Phần 2 trong nội dung xử lý đồng bộ và bất đồng bộ của JavaScript trên hai môi trường browser và nodejs. Video mô tả sự giống và khác nhau của cơ chế xử lý bất đồng bộ trên trình duyệt và trên run time xử lý back-end nodejs. Các API khác nhau của Nodejs và đặc thù của browser sẽ giúp chúng ta xử lý các tác vụ tương ứng.

Nội dung của video rất dài và có thể nói, là toàn diện nhất hiện nay về event loop trên browser và nodejs. Những vấn đề phức tạp như các phase của evemt loop trên Nodejs, sự khác biệt giữa tác vụ microtask và tác vụ macrotask sẽ được trình bày đầy đủ cả lí thuyết và ví dụ cụ thể.

Chúng ta sẽ tìm hiểu lí do vì sao JavaScript là ngôn ngữ single-threaded đơn luồng, nhưng lại xử lý rất tốt các tác vụ đa luồng. Bản chất của JavaScript có thể blocking các tác vụ I/O, nhưng nhờ cơ chế xử lý bất đồng bộ, chúng ta dễ dàng scale up nâng cấp mở rộng hệ thống, cân bằng tải (trong trường hợp backend với Nodejs).

---

# Những bình luận hay trong video

![alt text](image.png)

![alt text](image-1.png)
-> Link code trong video tác giả đã xóa code rồi, mình vô không thấy code nữa

![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)

Đây là phần bình luận dài nhất trong video
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)

Phần này thảo luận về khi ta chạy code JavaScript thì trình biên dịch V8 sẽ dịch ra code C++...và từ đó trình duyệt sẽ dịch code từ C++ ra kết quả
![alt text](image-12.png)

Phần này hỏi về Event Loop trong NodeJS
![alt text](image-13.png)
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
