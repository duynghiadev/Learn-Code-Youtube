# HIỂU VỀ SPA (HIỂU ĐÚNG VỀ REACT)

> Trong web truyền thống, thì request follow sẽ như sau:

1. Browser gửi 1 request đến serve cho page cần lấy dữ liệu hiển thị cho người dùng
2. Server dựa vào định danh trên url để nhận data từ database trả về
3. The server tạo ra view với data từ database
4. Serve trả về html document bao gồm css, js, image...
5. Browser Hiển thị thông tin đến người dùng


> Khi sử dụng React, luồng Request sẽ như thế này

1. Browser gửi 1 request đến serve cho page cần lấy dữ liệu hiển thị cho người dùng
2. Serve không quan tâm về pathname. Thay vào đó nó return a standard index.html that includes the React app and any static assets
3. The React app mounts
4. React dựa vào pathname định danh URL và sử dụng định danh này để call api fetch data
5. The React app renders the page using data it received from the API call

Single-pageapplications(SPAs) are web apps that load once and then dynamically update elements
on the page using JavaScript. Every React app we’ve built so far has been a type of SPA
