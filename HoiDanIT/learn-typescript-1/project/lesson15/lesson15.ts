let namev2: any = "Eric"; // any everywhere
let namev3: any = "John"; // any everywhere

// Việc sử dụng any trong TypeScript chỉ dùng khi migrate từ project JavaScript sang TypeScript thôi nhé ✅
// Hạn chế sử dụng kiểu any trong dự án TypeScript. Bời vì khi dùng nhiều kiểu any thì sẽ sinh ra bất lợi chứ không phải có lợi như các bạn nghĩ đâu nhé ❌

namev2 = true; // boolean
namev3 = 99; // number

console.log(">>> check namev2: ", namev2);
console.log(">>> check namev3: ", namev3);
