import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//kl1: Với React file chạy chính được render đưa vào body script chính là index.js
// phần 2: Cách tạo ra 1 component và hiểu về export -- import
// phân biệt rõ export default và export thông thường
// phần 3: state trong react thực sự là gì? và xử dụng state như nào

