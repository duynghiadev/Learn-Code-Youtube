const users = [
  {
    id: 7,
    email: "test@example.com",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/folser/128.jpg",
    tags: ["AAA", "BBB"],
  },
  {
    id: 8,
    email: "lindsay.ferguson@req.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
    tags: ["BBB"],
  },
  {
    id: 9,
    email: "tobias.funke@gmail.com",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
    tags: ["AAA"],
  },
  {
    id: 10,
    email: "byron.field@gmail.com",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russofx/128.jpg",
    tags: ["BBB", "CCC"],
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
    tags: ["CCC", "BBB"],
  },
  {
    id: 12,
    email: "rachel.howell@gmail.com",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/josemarques/128.jpg",
    tags: ["DDD"],
  },
];

// map là tạo ra một cái Array mới, chứ không hề thay đổi Array cũ
// --------------- map: cách 1 ------------
const mapUsers = users.map((user) => {
  return user.email;
});

console.log(mapUsers);
