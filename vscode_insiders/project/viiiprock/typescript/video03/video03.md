# typescript p.3 Các kiểu tiện ích trong Typescript | Utility types

Học nhanh typescript p.3 - Các kiểu tiện ích trong Typescript | Utility types
Typescript cung cho chúng ta các kiểu tiện ích nhằm tăng khả năng chuyển đổi kiểu qua lại với nhau,
việc sử dụng kiểu tiện ích thành thạo giúp chúng ta thuận tiện hơn trong quá trình viết hàm chung,
viết các module, thư viện

Các kiểu tiện ích này gốc của nó là được triển khai từ các kiểu chung và các phương thức điều kiện
hay ánh xạ, mục tiêu của bài này là giải thích về các kiểu tiện ích trong typescript và ứng dụng của
các kiểu tiện ích. Vì vậy mình sẽ không đi sâu vào cấu tạo của từng kiểu.

```bash
0:00 Partial
2:20 Required
2:53 Readonly
4:03 Record
4:44 Pick
5:10 Omit
5:29 Extract
7:29 Exclude
7:54 NonNullable
9:40 Parameters
11:40 ConstructorParameters
12:48 ReturnType
13:37 InstanceType
14:17 ThisParameterType
15:25 OmitThisParameter
16:05 ThisType
17:31 Ứng dụng
```

---

# Dưới đây là những giải thích về các khái niệm đó

Các khái niệm này đều liên quan đến TypeScript, một ngôn ngữ lập trình phổ biến được sử dụng để xây dựng ứng dụng web và node.js với tính linh hoạt và kiểm tra kiểu tĩnh. Dưới đây là giải thích cho mỗi khái niệm:

1. **Partial**: `Partial<T>` là một generic type trong TypeScript, cho phép bạn chỉ định rằng một kiểu (type) T có thể bị thiếu các thuộc tính của nó. Khi bạn sử dụng `Partial<T>`, tất cả các thuộc tính của T sẽ trở thành tùy chọn (`optional`).

2. **Required**: Ngược lại với `Partial`, `Required<T>` là một generic type khác trong TypeScript. Nó chuyển một kiểu (type) T thành một kiểu mới trong đó tất cả các thuộc tính là bắt buộc.

3. **Readonly**: `Readonly<T>` là một generic type khác trong TypeScript, nó biến tất cả các thuộc tính của kiểu (type) T thành `readonly`, có nghĩa là chúng không thể thay đổi sau khi được khởi tạo.

4. **Record**: `Record<K, T>` là một generic type trong TypeScript, nó tạo ra một kiểu mới trong đó các khóa (keys) từ K sẽ tương ứng với giá trị từ T.

5. **Pick**: `Pick<T, K>` là một generic type trong TypeScript, nó tạo ra một kiểu mới từ kiểu (type) T chỉ bằng cách chọn một số thuộc tính cụ thể được chỉ định bởi kiểu (type) K.

6. **Omit**: `Omit<T, K>` là một generic type trong TypeScript, nó tạo ra một kiểu mới từ kiểu (type) T bằng cách loại bỏ các thuộc tính được chỉ định bởi kiểu (type) K.

7. **Extract**: `Extract<T, U>` là một generic type trong TypeScript, nó tạo ra một kiểu mới từ kiểu (type) T chỉ bằng cách giữ lại các phần tử mà kiểu (type) của chúng tương ứng với kiểu (type) U.

8. **Exclude**: `Exclude<T, U>` là một generic type trong TypeScript, nó tạo ra một kiểu mới từ kiểu (type) T chỉ bằng cách loại bỏ các phần tử mà kiểu (type) của chúng tương ứng với kiểu (type) U.

9. **NonNullable**: `NonNullable<T>` là một generic type trong TypeScript, nó tạo ra một kiểu mới từ kiểu (type) T bằng cách loại bỏ null và undefined khỏi T.

10. **Parameters**: `Parameters<T>` là một generic type trong TypeScript, nó trích xuất kiểu (type) của các tham số của một hàm.

11. **ConstructorParameters**: `ConstructorParameters<T>` là một generic type trong TypeScript, nó trích xuất kiểu (type) của các tham số của constructor của một lớp.

12. **ReturnType**: `ReturnType<T>` là một generic type trong TypeScript, nó trích xuất kiểu (type) của giá trị trả về của một hàm.

13. **InstanceType**: `InstanceType<T>` là một generic type trong TypeScript, nó trích xuất kiểu (type) của một thể hiện (instance) được tạo từ một constructor function.

14. **ThisParameterType**: `ThisParameterType<T>` là một generic type trong TypeScript, nó trích xuất kiểu (type) của tham số `this` của một hàm.

15. **OmitThisParameter**: `OmitThisParameter<T>` là một generic type trong TypeScript, nó loại bỏ tham số `this` từ kiểu (type) T.

16. **ThisType**: `ThisType<T>` là một kiểu (type) trong TypeScript, nó đại diện cho kiểu của biến `this` trong một phạm vi cụ thể.
