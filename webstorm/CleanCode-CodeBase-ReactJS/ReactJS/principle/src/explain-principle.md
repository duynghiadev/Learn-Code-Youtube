> Mỗi từng bài mình sẽ giải thích những khái niệm trong bài đó ở trong file này

# Batching trong React 18

### Tìm hiểu về Batching trong React

---

> **Dưới đây là kiến thức của chat-GPT**

Hiện tại, tới thời điểm kiến thức cuối cùng của tôi vào tháng 1 năm 2022, React 18 chưa được phát hành. Thông tin về React 18 và tính năng mới của nó có thể đã xuất hiện kể từ sau thời điểm đó. Vui lòng kiểm tra trực tiếp trang [chính thức của React](https://react.dev/) hoặc các nguồn tin đáng tin cậy khác để biết thông tin cập nhật.

Tính đến thời điểm kiến thức cuối cùng của tôi, batching trong React là một quá trình tự động gộp các cập nhật để tối ưu hóa hiệu suất của ứng dụng. React tự động thực hiện batching để gộp nhiều cập nhật vào một lượt render, giảm số lần cập nhật UI và tối ưu hóa việc vẽ lại (re-render) để tăng hiệu suất.

Batching giúp giảm thiểu việc thực hiện nhiều lần cập nhật UI liên tiếp và tăng hiệu suất bằng cách thực hiện một lượt render duy nhất sau khi tất cả các cập nhật đã được thực hiện. Điều này có thể giảm số lượng lượt render và giúp tránh các vấn đề hiệu suất không mong muốn.

Nếu có bất kỳ cập nhật mới nào trong React 18 liên quan đến batching hoặc bất kỳ tính năng nào khác, tôi khuyên bạn nên kiểm tra [tài liệu chính thức](https://react.dev/) hoặc các nguồn tin đáng tin cậy để biết thông tin cập nhật chi tiết và đầy đủ.

> **Dưới đây là kiến thức của Bing**

Batching trong React và Automatic Batching trong React 18

Batching trong React là một kỹ thuật tối ưu hóa hiệu suất của thư viện React. Khi gọi `setState()`, React sẽ bắt đầu quá trình render mới, một cách đồng bộ và trả về. Khi gọi `setState()` nhiều lần liên tiếp nhau, app của bạn sẽ render nhiều lần. Để tối ưu việc render này, React cung cấp khái niệm "render batching". Thay vì gọi `setState()` nhiều lần, React sẽ tự động batch các lần gọi liên tiếp nhau vào để chỉ phải chạy re-render 1 lần duy nhất.

Tuy nhiên, với các phiên bản React trước (từ 17 trở xuống), việc batching chỉ được thực hiện trong các React event handlers. Điều đấy cũng có nghĩa là những updates xảy ra trong các `promises`, `setTimeout`, native event handlers hoặc các event khác sẽ không được batched. Điều này đã được cải thiện trong React 18 với feature mới: **Automatic Batching** giúp tối ưu hóa cho việc render.

[Automatic Batching – Cải tiến đáng giá trên React 18 | TopDev](https://topdev.vn/blog/automatic-batching-react-18/).

[React Batching - Robin Wieruch](https://www.robinwieruch.de/react-batching/).

[Automatic Batching in React 18 - DEV Community](https://dev.to/this-is-learning/automatic-batching-in-react-18-273h).

[React batching là gì](https://codestus.com/posts/react-batching-la-gi)

**Source:** Conversation with Bing, 12/25/2023
