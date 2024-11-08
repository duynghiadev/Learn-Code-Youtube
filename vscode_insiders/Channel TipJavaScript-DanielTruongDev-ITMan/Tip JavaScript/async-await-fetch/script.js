const initApp = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  // Level 2
  const getTodo = async () => {
    return await fetch(url);
  };

  // Level 3
  const getTodo2 = async () => {
    return (await fetch(url)).json();
  };

  console.log("Init DOM");

  const btn_getList = document.querySelector("button");
  if (btn_getList) {
    btn_getList.addEventListener("click", async () => {
      console.log("Event click");
      // Cach 1 -> Level 1 -> cách này dành cho những người mới vào nghề
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          console.log("> This is type code of Level 1 -> data:", data)
        )
        .catch((error) => console.log(error));

      // Cach 2 -> Level 2 -> cách này dành cho người đi làm lâu năm
      const todo = await getTodo(url);
      const data = await todo.json();
      console.log(">> This is type code of Level 2 -> data:", data);

      // Cach 3 -> Level 3 -> cách này dành cho cao thủ
      const title = await getTodo2(url);
      console.log(">>> This is type code of Level 3 -> title:", title);
    });
  }
};

document.addEventListener("DOMContentLoaded", initApp());
