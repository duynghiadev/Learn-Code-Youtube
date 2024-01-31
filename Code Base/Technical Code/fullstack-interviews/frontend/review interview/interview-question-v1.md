1. Closures ? Ứng dụng closures ? Private variable ?

```jsx
function someFunc() {
  // 1
  const dev = "to";
}
```

```jsx
function createUser(name, job) {
  let name = name;
  let job = job;

  return {
    getName() {
      return name;
    },
    getJob() {
      return job;
    },

    setName(newName) {
      name = newName;
    },
    setJob(newJob) {
      job = newJob;
    },
  };
}
```

## SSR

_ Xử lý logic và render HTML tại server
_ Routing nằm ở server

## Good:

- SEO vì google bot, bing pot vào sẽ thấy toàn bộ dữ liệu dưới dạng HTML, tương thích mọi trình duyệt, tắt JS nhưng bớt vẫn đọc đc

## Bad:

_ Chuyển trang load lại toàn bộ ảnh hưởng trải nghiệm
_ Request nhiều, thừa server Quá tải, tốn băng thông

## CSR

_ Logic phức tạp, connect db, bảo mật, phân quyền xử lý trên server
_ render HTML, CSS, chuyển trang ở client

## Good:

Load, chuyển trang nhanh vì load xong mới call api để sinh nội dung ( Fast rendering after init load )
Giảm chi phí load ở server

## Bad:

_ Client phải download cả cục bundle JS => render => gọi API
_ ko tốt cho SEO vì bot ko đọc đc dữ liệu

## ??? Nên dùng gì :

_ Cả 2, tuỳ yêu cầu dự án.
_ Kết hợp cả 2 ntn ???

## Pre-rendering

Website render HTML -> gửi về client. Có 2 loại: SSG và SSR ( Universal). VD: NextJS

Sendo: request lần đầu, server gọi API và render HTML, CSS, JS gửi về client ( giống SSR ), các request sau đó thx client gọi API và render tại client. ( can bằgn tải server và client )

Good: site load nhanh vì render ở server, tối ưu SEO
Bad: chậm ở chỗ lần đầu gọi API và render tại server

2. PWA

- Tăng trải nghiệm người dùng dựa trên nền web.

- Tính năng: offline mod, push notification, caching, trải nghiệm giống app ko có thanh URL.

_ Là ứng dụng web HTML5/responsive.
_ Offline mode: server worker cho phep tải nội dung dưới backend và hỗ trợ push notification.
_ Hỗ trợ deep link.
_ Progressive: chạy trên mọi thiết bị cả thiết bị cũ.

- SW: là 1 chương trình viết bằng JS chạy ngâm và tách biệt khỏi trang web, ko có giao diện, đồng bộ ngầm.

3. Presign URL

_ Giảm băng thông nhiều lần
_ Là cung cấp permission tạm thời để dọc và tạo file trê cloud. Việc tạo Presign URL ở server.

4. Call, bind, apply ? Cho ví dụ
5. Tree shaking
6. Pure Function ( Pure component )
7. const vs object.freeze trong JS
8. == vs === (strict)

===================== NEXTJS ============================

SSR, SSG, SPA, SEO, automatic code splitting

SSG: là webste đc render ra html trong quá trình build, html sẵn sàng ở mỗi req của user, tiết kiệm chi phí user vì ít dùng tài nguyên

ISR: regeneration during runtime

======================== REACTJS =========================

1. Leak memory trong useEffect, setTimeout, addEvent, ... ?
2. useCallback vs useMemo ?

```jsx
const fn = () => 42; // giả sử dòng này là tính toán phức tạp (VD: render child elemon, calculate for render...)
const memoFn = useCallback(fn, [dep]); // (1)
const memoFnReturn = useMemo(fn, [dep]); // (2)
```

- (1) trả về memoized version of fn - cùng một tham chiếu, miễn là dep giống nhau. Nhưng mỗi khi gọi memoFn, quá trình tính toán phức tạp sẽ đc thực thi.
- (2) sẽ gọi fn mỗi khi dep thay đổi và ghi nhớ giá trị trả về của nó (trường hợp này là 42), sau đó được lưu trữ trong memoFnReturn.

3. HOC - ứng dụng hiện tại của HOC - viết HOC
4. Compount component trong react là gì ? VD ? Tại sao ? Demo ....

========================= WEB TECHNICAL =====================

1. Service worker vs web worker
2. Service worker flow, push notification flow

==================== DEPLOYMENT FLOW ===========================

1. What is docker, why, when, how to works ? Best practice, config ???
2. Monitor tool ????
