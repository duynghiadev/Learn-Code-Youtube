// Ví dụ 3: Đối với JSON.parse()
const user = {
  name: "Sy Dinh",
  email: "sydinh.dev@gmail.com",
};

const userStr = JSON.stringify(user);

JSON.parse(userStr, (key, value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
});

// "{name: "SY DINH", email: "SYDINH.DEV@GMAIL.COM"}"
