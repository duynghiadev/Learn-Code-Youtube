// Đối với JSON.stringify()
const user = {
  id: 01,
  name: "Sy Dinh",
  email: "sydinh.dev@gmail.com",
};

function replacer(key, value) {
  if (key === "email") {
    return undefined;
  }
  return value;
}

const userStr = JSON.stringify(user, replacer);
// JSON "{"id":1,"name":"Sy Dinh"}"
