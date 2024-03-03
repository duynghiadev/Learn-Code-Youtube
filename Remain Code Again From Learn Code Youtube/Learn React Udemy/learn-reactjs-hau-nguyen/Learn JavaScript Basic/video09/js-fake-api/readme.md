# Javascript - Hướng dẫn mock API với data mẫu 🎉

> ISSUE: Code giao diện nhưng APIs chưa ready thì phải làm sao?

**GIẢI PHÁP**

1. Xin BE response schema cho các APIs mình cần.
2. Tạo dữ liệu mẫu theo đúng schema mà BE cung cấp (json-generator.com)
3. Giả lập API với dữ liệu mẫu mới generate.

## Cách giả lập lời gọi API trong Javascript

```js
// fake-data.js
export const FAKE_STUDENT_LIST = [];
```

```js
// studentApi.js
import { FAKE_STUDENT_LIST } from './fake-data';

const getAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_STUDENT_LIST);
    }, 250);
  });
};

export default {
  getAll,
};
```

```js
// main.js
import studentApi from './api/studentApi';

const main = async () => {
  try {
    const response = await studentApi.getAll();
    console.log(response);
  } catch (error) {
    console.log('Failed to fetch student list:', error);
  }
};

main();
```

<div style="page-break-after: always;"></div>

**Khoá học ReactJS cho người mới bắt đầu trên Udemy**

- 🌐 Link khoá học: [https://course.ezfrontend.com/reactjs](https://course.ezfrontend.com/reactjs)
- 🔥 Giá khuyến mãi `25%` chỉ còn `700k` 😱

Happy Coding! 💻

**Những bình luận hay**

![Alt text](image.png)
![Alt text](image-1.png)
