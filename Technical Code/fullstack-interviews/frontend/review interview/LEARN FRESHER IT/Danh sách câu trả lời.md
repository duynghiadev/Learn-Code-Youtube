1.

- Props là viết tắt của thuộc tính (properties) và đại diện cho các giá trị được truyền từ component cha xuống component con thông qua tham số truyền vào khi tạo instance của component. Props là giá trị không thể thay đổi bên trong component con.

- State là trạng thái của component, chứa các giá trị có thể thay đổi bởi các sự kiện xảy ra trong component. Nó là một đối tượng chứa các thuộc tính và có thể được cập nhật bằng setState() trong component.

2.

- setState là hàm bất đồng bộ, có nghĩa là nó sẽ không đợi đến khi tất cả các lệnh trước đó được thực thi hoàn tất trước khi thực hiện lệnh setState. Nếu setState là hàm đồng bộ, thì tất cả các lệnh khác sẽ bị đóng băng cho đến khi setState hoàn thành.

3.

- DOM ảo là một khái niệm của React, nó là một bản sao của DOM thật được lưu trữ trong bộ nhớ, được sử dụng để tạo giao diện người dùng. Khi trạng thái của component thay đổi, React sẽ sử dụng DOM ảo để so sánh với DOM thật và chỉ cập nhật những phần khác nhau giữa chúng để tối ưu hóa quá trình render.

- Quá trình render của React bao gồm các bước sau:

  - React sử dụng JSX để tạo ra cây phân cấp của các component.
  - React chuyển đổi cây component thành cây React Elements.
  - React sử dụng cây React Elements để tạo ra DOM ảo.
  - React sử dụng DOM ảo để cập nhật DOM thật nếu có sự thay đổi trạng thái của component.

- Quá trình re-render xảy ra khi trạng thái của component thay đổi. React sẽ tạo lại DOM ảo, so sánh với DOM thật và chỉ cập nhật những phần khác nhau giữa chúng để tối ưu hóa quá trình render.

4.

- Function component là một kiểu component mới được giới thiệu trong React 16, cho phép bạn tạo component bằng cách sử dụng hàm thay vì sử dụng class. Điểm khác biệt chính giữa hai loại component là cách chúng được khai báo và xử lý trạng thái. Function component không có phương thức lifecycle và không có trạng thái. Thay vào đó, nó sử dụng hooks để quản lý trạng thái và các vấn đề khác liên quan đến component.

5.

- Lifecycle trong React là chuỗi các phương thức được gọi để thực hiện các hoạt động nhất định khi một component được khởi tạo, cập nhật, hoặc bị hủy bỏ. Tùy theo phiên bản React mà cách viết lifecycle sẽ có sự khác nhau.

- Trong phiên bản React trước 16.3, lifecycle của một class component bao gồm các phương thức sau:

  - componentWillMount: Phương thức này được gọi trước khi component được render lần đầu tiên.

  - componentDidMount: Phương thức này được gọi sau khi component được render lần đầu tiên.

  - componentWillReceiveProps(nextProps): Phương thức này được gọi khi component nhận được props mới.

  - shouldComponentUpdate(nextProps, nextState): Phương thức này được gọi trước khi component được cập nhật, để xác định liệu component có cần được cập nhật hay không. Nếu phương thức này trả về false, component sẽ không được cập nhật.

  - componentWillUpdate(nextProps, nextState): Phương thức này được gọi trước khi component được cập nhật.

  - componentDidUpdate(prevProps, prevState): Phương thức này được gọi sau khi component được cập nhật.

  - componentWillUnmount: Phương thức này được gọi trước khi component bị xóa khỏi DOM.

- Từ phiên bản React 16.3 trở lên, lifecycle được cải tiến bằng cách loại bỏ một số phương thức và thêm vào các phương thức mới. Cụ thể:

  - static getDerivedStateFromProps(props, state): Thay vì sử dụng componentWillReceiveProps, phương thức getDerivedStateFromProps được sử dụng để xác định state mới dựa trên props mới và state hiện tại của component.

  - getSnapshotBeforeUpdate(prevProps, prevState): Phương thức này được sử dụng để lấy thông tin trước khi component được cập nhật. Nó được sử dụng để lưu trữ trạng thái của DOM trước khi cập nhật.

  - componentDidUpdate(prevProps, prevState, snapshot): Phương thức này được cập nhật để truyền vào snapshot để xử lý trạng thái của DOM trước khi cập nhật.

6.

- componentWillReceiveProps(nextProps) được gọi khi một component nhận được props mới. Phương thức này được sử dụng để cập nhật state của component dựa trên props mới.

7.

- `shouldComponentUpdate` được sử dụng để tối ưu hóa hiệu suất của ứng dụng React. Khi một component nhận được props mới hoặc state thay đổi, React sẽ tự động gọi phương thức này để xác định liệu component có cần phải được render lại hay không. Nếu `shouldComponentUpdate` trả về giá trị true, component sẽ được render lại; nếu trả về false, component sẽ không được render lại.
- Việc sử dụng `shouldComponentUpdate` có thể giảm tải hiệu năng của ứng dụng, vì nó cho phép React tránh render lại các component không cần thiết khi không có sự thay đổi nào trong props hoặc state.

8.

- Trước khi có version 16.8.0, function component được sử dụng để hiển thị một giao diện đơn giản. Nhưng nó không có state, lifecycle hay các phương thức của component như class component. Nếu bạn muốn chia sẻ logic giữa các component thì bạn phải sử dụng HOC (Higher-Order Component) hoặc Render Props. Tuy nhiên, từ phiên bản 16.8.0, React giới thiệu hook, cho phép function component sử dụng state, lifecycle và các phương thức của component, từ đó giúp cho function component có thể thay thế hoàn toàn cho class component.

9.

- Trong function component, lifecycle được viết thông qua React Hooks. React Hooks là một tính năng được giới thiệu trong phiên bản React 16.8.0 giúp cho việc quản lý state và lifecycle của component trở nên dễ dàng hơn. Những lifecycle function trước đó trong class component như componentDidMount, componentDidUpdate, và componentWillUnmount được thay thế bằng các Hooks tương ứng, như useEffect, useRef, useMemo, useCallback, và nhiều hơn nữa.

- Các Hooks này được gọi bằng cách sử dụng hàm React.useState hoặc React.useEffect. Ví dụ, useEffect được sử dụng để thực hiện các thao tác sau khi component đã được render, hoặc khi giá trị của props hoặc state thay đổi.

10.

- Trước đây, để thực hiện các lifecycle function trong function component, chúng ta cần sử dụng nhiều Hooks khác nhau tương ứng với các lifecycle function của class component. Tuy nhiên, từ phiên bản React 16.8.0, chúng ta có thể sử dụng hàm useEffect để thực hiện tất cả các lifecycle function của component.

- Việc sử dụng useEffect để thay thế các lifecycle function cũ giúp cho việc quản lý state và lifecycle trở nên dễ dàng hơn, giảm thiểu code boilerplate và làm cho component dễ đọc và hiểu hơn. Bên cạnh đó, việc sử dụng useEffect cũng giúp tối ưu hiệu suất của component bằng cách gom những thao tác liên quan đến lifecycle vào cùng một chỗ và thực hiện chúng đồng thời.

11.

- Trong useEffect, các dependency được sử dụng để xác định khi nào useEffect nên được gọi lại. Dependency là một mảng bao gồm tất cả các biến mà useEffect sẽ theo dõi để xác định xem có cần gọi lại useEffect hay không. Nếu bất kỳ biến nào trong dependency bị thay đổi, useEffect sẽ được gọi lại. Nếu không có dependency nào được cung cấp, useEffect sẽ được gọi lại sau mỗi lần render.

12.

- Ngoài useEffect, React còn cung cấp một số hooks khác như useState, useContext, useMemo, useCallback, useRef, useReducer và nhiều hooks khác nữa. Mỗi hook được thiết kế để giải quyết một vấn đề cụ thể trong việc phát triển ứng dụng React.

- Custom hook là một hook được tạo bởi người dùng, được xây dựng trên các hooks có sẵn trong React. Custom hook giúp tách biệt logic của ứng dụng, đóng gói các logic phức tạp vào một hook có thể được tái sử dụng trong nhiều component khác nhau.

13.

- HOC (Higher-Order Component) là một pattern trong React, cho phép tái sử dụng logic trong các component khác nhau. HOC là một component nhận vào một component khác và trả về một component mới với các tính năng được mở rộng. HOC là một công cụ mạnh mẽ trong việc chia sẻ logic giữa các component khác nhau và tránh việc lặp lại code. HOC cũng được sử dụng để thêm các tính năng như xử lý sự kiện, xác thực, ghi nhật ký, quản lý trạng thái, và nhiều hơn nữa.

14.

- Promise: là một đối tượng trong JavaScript được sử dụng để xử lý các tác vụ bất đồng bộ (asynchronous) và trả về kết quả ở tương lai. Promise có thể có trạng thái "đang chờ" (pending), "đã thực thi thành công" (resolved) hoặc "đã thực thi thất bại" (rejected). Khi một promise được tạo ra, ta có thể sử dụng phương thức then() để xử lý kết quả trả về nếu promise được giải quyết thành công hoặc sử dụng catch() để xử lý lỗi nếu promise bị từ chối.

- Callback: là một hàm được truyền vào một hàm khác như một tham số và được gọi bởi hàm đó trong quá trình thực thi. Callback thường được sử dụng trong các tình huống cần xử lý bất đồng bộ.

- async/await: là một tính năng của ES2017 (ES8) được sử dụng để xử lý các tác vụ bất đồng bộ. Khi sử dụng async/await, ta có thể viết code giống như đồng bộ (synchronous) để xử lý các tác vụ bất đồng bộ. Từ khóa async được sử dụng để định nghĩa hàm bất đồng bộ và từ khóa await được sử dụng để đợi cho một promise hoàn thành.

15.

- Redux là một thư viện quản lý trạng thái của ứng dụng. Nó giúp tạo ra một store, lưu trữ trạng thái của ứng dụng và cho phép các component khác nhau truy cập vào trạng thái này. Redux được sử dụng trong các ứng dụng lớn hoặc phức tạp với nhiều component cần truy cập vào cùng một trạng thái và cần đồng bộ hóa trạng thái giữa các component khác nhau.

- Lý do khi nào nên sử dụng Redux có thể bao gồm:

  - Ứng dụng có trạng thái phức tạp, phụ thuộc vào nhiều component khác nhau.
  - Ứng dụng có nhiều dữ liệu trạng thái cần được chia sẻ và quản lý.
  - Ứng dụng có các actions phức tạp hoặc cần được theo dõi để gỡ lỗi.
  - Ứng dụng có nhiều component cần truy cập cùng một trạng thái.

16.

- Ngoài Redux, trong React còn có một số cách khác để chia sẻ dữ liệu giữa các component như sau:

  - Prop Drilling: Là cách truyền dữ liệu từ component cha đến các component con thông qua việc truyền props. Tuy nhiên, khi sử dụng Prop Drilling, khi số lượng component con tăng lên, việc truyền props trở nên phức tạp và khó quản lý.

  - Context API: Là một API của React cho phép truy cập trực tiếp vào một giá trị được lưu trữ ở component cha và sử dụng trong các component con của nó, mà không cần truyền props. Với Context API, ta có thể tạo ra một context ở component cha, lưu trữ giá trị vào context đó và sử dụng giá trị đó ở các component con. Context API là một cách tiện lợi để chia sẻ dữ liệu trong ứng dụng, tuy nhiên nó không phải là một giải pháp tối ưu cho các ứng dụng lớn với nhiều component.

  - Redux Toolkit: Là một thư viện giúp quản lý trạng thái của ứng dụng và chia sẻ dữ liệu giữa các component trong ứng dụng. Redux Toolkit sử dụng một kiến trúc tương tự Flux, với một store chứa toàn bộ trạng thái của ứng dụng và các reducer để xử lý các action để cập nhật trạng thái của ứng dụng.

  - React Query: Là một thư viện giúp quản lý dữ liệu từ server và chia sẻ dữ liệu giữa các component trong ứng dụng. React Query sử dụng cache để lưu trữ dữ liệu đã được fetch từ server, giúp giảm số lượng request gửi lên server. Với React Query, ta có thể fetch dữ liệu và sử dụng nó trong bất kỳ component nào trong ứng dụng.

18.

- Middleware là một cơ chế mà Redux cung cấp để mở rộng chức năng của store. Middleware có thể can thiệp vào quá trình xử lý của các action trước khi nó được đưa vào reducer, từ đó cho phép chúng ta thực hiện những tác vụ như ghi log, gọi API, xử lý side effect, v.v. Các middleware phổ biến trong Redux bao gồm redux-thunk, redux-saga, redux-observable, v.v.

19.

- redux-thunk là một middleware cho phép chúng ta viết các action creator trả về một function thay vì một object, như là một cách để thực hiện các tác vụ bất đồng bộ trong Redux. Khi một action creator trả về một function, thì function này sẽ được gọi với hai tham số: dispatch và getState. Chúng ta có thể sử dụng dispatch để dispatch một action khác, hoặc có thể sử dụng getState để truy cập trạng thái hiện tại của store. Với redux-thunk, chúng ta có thể dispatch các action bất đồng bộ như gọi API, lưu trữ dữ liệu trong localStorage, v.v.

20.

- Sass là một ngôn ngữ cải tiến của CSS, cho phép viết CSS với cú pháp ngắn gọn hơn và cung cấp nhiều tính năng hơn. Sass được phát triển để giải quyết các vấn đề về quản lý mã nguồn và hiệu quả trong việc phát triển giao diện web.

- Sass cung cấp các tính năng như biến, nesting, mixin, và thừa kế để tăng tính linh hoạt và tái sử dụng trong quá trình phát triển giao diện. Sass cũng hỗ trợ việc viết CSS modul và phân chia code thành các file nhỏ hơn để quản lý dễ dàng hơn.

21.

- BEM là viết tắt của Block, Element, Modifier. Đây là một quy tắc đặt tên cho lớp trong CSS, nhằm tạo ra một cách đặt tên nhất quán và dễ đọc cho các lớp trong CSS.

- Cụ thể, theo quy tắc này, một lớp sẽ được đặt tên theo định dạng: block\_\_element--modifier. Trong đó:

  - Block: tên của phần tử hoặc component chứa element. Ví dụ: header, menu, button.
  - Element: phần tử con của block, được xác định bởi tên block và dấu gạch dưới. Ví dụ: header**logo, menu**item.
  - Modifier: một lớp chỉ định trạng thái hoặc kiểu dáng của block hoặc element. Ví dụ: button--primary, menu\_\_item--active.

- Quy tắc đặt tên BEM giúp tăng tính rõ ràng, linh hoạt, dễ bảo trì trong quá trình phát triển giao diện web.

22.

- Có nhiều thư viện hỗ trợ việc xây dựng UI và quản lý CSS trong các dự án web như:
  - Bootstrap: là một framework CSS phổ biến nhất, được sử dụng rộng rãi để xây dựng giao diện người dùng trên web. Nó cung cấp một loạt các thành phần (component) và lớp (class) CSS để giúp xây dựng giao diện nhanh chóng và dễ dàng.
  - Material UI: là một thư viện UI cho React, được xây dựng dựa trên hướng thiết kế của Google Material Design. Nó cung cấp các thành phần (component) và lớp (class) CSS để giúp bạn xây dựng giao diện tương thích với các chuẩn thiết kế của Google.
  - Semantic UI: là một thư viện UI được thiết kế để dễ sử dụng và tùy biến. Nó cung cấp một số thành phần (component) và lớp (class) CSS để giúp bạn xây dựng giao diện nhanh chóng và dễ dàng.
  - Tailwind CSS: là một thư viện CSS mới nhất, được thiết kế để tạo ra các giao diện đáp ứng (responsive) nhanh chóng và tùy biến dễ dàng hơn. Nó cung cấp một loạt các lớp (class) CSS để giúp bạn tạo các giao diện đáp ứng mà không cần viết CSS riêng biệt.

23.

- TypeScript là một ngôn ngữ lập trình phổ biến dựa trên JavaScript, nhưng cung cấp thêm tính năng kiểm tra kiểu tĩnh và hỗ trợ các tính năng mới của ECMAScript (ES) 6 và các phiên bản mới hơn. TypeScript cho phép bạn viết mã JavaScript dễ đọc và dễ bảo trì hơn bằng cách sử dụng kiểm tra kiểu tại thời điểm biên dịch thay vì kiểm tra kiểu tại thời điểm chạy như trong JavaScript thông thường. Điều này giúp giảm thiểu các lỗi chạy thời gian và cung cấp trải nghiệm phát triển tốt hơn.

24.

- Có nhiều thư viện và framework hỗ trợ server-side rendering trong JavaScript, trong đó phổ biến nhất là Next.js. Next.js là một framework React cung cấp các tính năng như server-side rendering, pre-rendering, và static site generation. Nó cho phép bạn tạo các ứng dụng web động hoặc tĩnh với hiệu suất tốt hơn, tối ưu hóa tìm kiếm, và trải nghiệm tốt hơn cho người dùng. Ngoài ra, còn có các thư viện khác như Nuxt.js cho Vue.js và Gatsby cho React cũng cung cấp các tính năng tương tự để hỗ trợ server-side rendering và static site generation.

25.

- Theo mặc định, ReactJS là một framework cho phép xây dựng ứng dụng Single Page Application (SPA), vì vậy nó được xếp vào loại Client-Side Rendering (CSR), tức là các phần tử HTML được tạo ra động bởi ReactJS được xây dựng trên phía client-side (trình duyệt). Tuy nhiên, ReactJS cũng có thể được sử dụng để xây dựng ứng dụng Server-Side Rendering (SSR), nghĩa là các phần tử HTML được tạo ra trên server-side, sau đó được gửi tới client-side để render.

26.

- useMemo() là một trong những hook của ReactJS được sử dụng để tối ưu hóa hiệu suất của ứng dụng. Nó giúp lưu giữ giá trị tính toán của một biến nào đó khi có sự thay đổi về props hoặc state, nhưng không cần phải tính toán lại giá trị đó nếu các giá trị props hoặc state không thay đổi.

- useMemo() nhận vào hai tham số: một là hàm callback (callback function) để tính toán giá trị cần lưu giữ, hai là một mảng dependencies, nếu dependencies không thay đổi, giá trị được lưu giữ sẽ không được tính toán lại. Nếu dependencies thay đổi, useMemo() sẽ tính toán lại giá trị và lưu giữ lại nó.

- Ví dụ sử dụng useMemo():

```jsx
import { useMemo } from "react";

function MyComponent({ a, b }) {
  const result = useMemo(() => {
    console.log("calculating result...");
    return a + b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}
```

- Ở đoạn mã trên, giá trị của biến result sẽ được tính toán bằng cách cộng giá trị của a và b. Giá trị này sẽ được lưu giữ lại bởi useMemo() và chỉ tính toán lại nếu giá trị của a hoặc b thay đổi. Trong trường hợp a hoặc b không thay đổi, khi state hoặc props của component được cập nhật, result sẽ không tính toán lại, giúp tối ưu hiệu suất cho ứng dụng.

27.

- Trong React, useRef là một hook dùng để tạo ra một tham chiếu tới một phần tử DOM hoặc một giá trị khác trong component.

- Khi sử dụng useRef, ta sẽ tạo ra một đối tượng ref (tham chiếu) và có thể gán cho nó giá trị của phần tử DOM hoặc giá trị khác bất kỳ. Đối tượng ref sẽ được duy trì giữa các lần render của component, nghĩa là nó không bị tạo lại khi component được render lại.

- Một số trường hợp sử dụng useRef:

  - Truy cập trực tiếp vào phần tử DOM để thao tác với nó, ví dụ như lấy giá trị của input, tạo animation, ...
  - Lưu trữ giá trị trước đó của một biến, ví dụ như trong việc so sánh giá trị trước và sau khi component được render để thực hiện một hành động nào đó.
  - Sử dụng để truyền giá trị từ một component con lên cho component cha thông qua props.

- Ví dụ sử dụng useRef để truy cập trực tiếp vào phần tử input:

```jsx
import { useRef } from "react";

function InputWithFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus vào phần tử input
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus vào input</button>
    </div>
  );
}
```

- Trong ví dụ trên, chúng ta sử dụng useRef để tạo ra một tham chiếu đến phần tử input. Khi người dùng click vào button, ta sử dụng phương thức focus để focus vào input và thực hiện một hành động nào đó.

28.

- useReducer() là một hook của React giúp quản lý state của một component dưới dạng một reducer function tương tự như trong Redux. Về cơ bản, nó tương tự với useState(), nhưng thay vì chỉ đơn giản là update trực tiếp giá trị state, nó sử dụng một reducer function để quản lý state.

- Cách hoạt động của useReducer() như sau:

  - Khi một action được gọi trong component, nó sẽ truyền action đó vào reducer function được cung cấp bởi useReducer().
  - Reducer function sẽ xử lý action và trả về một state mới, sau đó React sẽ cập nhật lại state và render lại component.

- useReducer() nhận vào 2 tham số: reducer function và giá trị ban đầu của state. Reducer function nhận vào 2 tham số là state hiện tại và action được gửi đến và trả về state mới.

- Ví dụ sử dụng useReducer():

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

- Trong ví dụ này, Counter component sử dụng useReducer() để quản lý state. State ban đầu là { count: 0 }, và reducer function được sử dụng để xử lý các action được gọi trong component, trả về state mới. Khi người dùng click vào button + hoặc -, action tương ứng được dispatch đến reducer function, reducer function sẽ xử lý và trả về state mới, và React sẽ cập nhật lại UI để hiển thị state mới.

**_ Phân biệt _**

- Code mạng xã hội
- Code Blog App
- Code E-commerce

- Code mạng xã hội, Code Blog App và Code E-commerce là các dự án khác nhau về tính chất và mục đích sử dụng. Dưới đây là phân biệt giữa các dự án này:

- Code mạng xã hội là dự án nhằm xây dựng một mạng xã hội trực tuyến, nơi người dùng có thể tạo và quản lý các thông tin cá nhân, chia sẻ nội dung, kết nối với bạn bè và các cộng đồng chung quanh sở thích, nhu cầu của mình.

- Code Blog App là dự án tập trung vào xây dựng một ứng dụng Blog, nơi người dùng có thể viết và đăng bài, tương tác với các bài viết khác, đăng ký thành viên và quản lý thông tin cá nhân.

- Code E-commerce là dự án tập trung vào xây dựng một trang web bán hàng trực tuyến, nơi người dùng có thể tìm kiếm, xem và mua các sản phẩm, quản lý giỏ hàng, thanh toán và vận chuyển sản phẩm.

- Tuy nhiên, trong thực tế, các dự án này có thể có sự chồng chéo giữa các tính năng, ví dụ như một mạng xã hội có tích hợp chức năng bán hàng, hoặc một trang web E-commerce có chức năng tạo blog để tăng tính tương tác với khách hàng.

**_ Speak English _**

"The frog at the bottom of a well doesn't know the vastness of the sea, but it does know the blueness of the sky"

- `Tạm dịch`: "Ếch ngồi đáy giếng chẳng biết biển rộng, chỉ biết trời xanh"

- `Có nghĩa là`:

  - Câu nói này có nghĩa là một người hoặc một thực thể sống trong một môi trường hạn chế và có thể không hiểu được những điều bên ngoài rộng lớn hơn, nhưng họ có thể cảm nhận được những thứ đơn giản, rõ ràng trong môi trường của họ. Tương tự, một người hoặc một nhóm người có thể bị giới hạn bởi kiến thức và kinh nghiệm của họ và không thể nhìn nhận được những khía cạnh lớn hơn của cuộc sống, nhưng họ có thể hiểu được những thứ nhỏ nhặt, đơn giản trong phạm vi của họ.

  - Câu này có nghĩa là một người ít hiểu biết, ít được tiếp xúc với thế giới bên ngoài sẽ khó lòng hiểu rõ những điều lớn lao, bao quát và chỉ có thể hiểu được những điều đơn giản, cơ bản. Chúng ta cần mở rộng tầm nhìn, trải nghiệm thực tế để có cái nhìn tổng quát hơn về cuộc sống và thế giới xung quanh.
