const fs = require("fs");
const Table = require("cli-table3");
const readline = require("readline");

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Đọc dữ liệu từ file data.json
function readDataFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    });
  });
}

// Ghi dữ liệu vào file data.json
function writeDataToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("data.json", JSON.stringify(data), "utf8", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// Hiển thị bảng dữ liệu
function displayTable(data) {
  // Chuẩn bị dữ liệu cho bảng
  const tableData = [];

  data.magazines.forEach((magazine) => {
    magazine.articles.forEach((article) => {
      const rowData = [
        magazine.id,
        magazine.title,
        article.id,
        article.title,
        article.content,
      ];
      tableData.push(rowData);
    });
  });

  // Tạo bảng
  const table = new Table({
    head: [
      "Magazine ID",
      "Magazine Title",
      "Article ID",
      "Article Title",
      "Article Content",
    ],
    colWidths: [15, 30, 15, 30, 50],
  });

  // Thêm dữ liệu vào bảng
  table.push(...tableData);

  // In bảng
  console.log(table.toString());
}

// Hiển thị danh sách tạp chí
function displayMagazines(data) {
  console.log("===== DANH SÁCH TẠP CHÍ =====");
  data.magazines.forEach((magazine) => {
    console.log(`${magazine.id}. ${magazine.title}`);
  });
}

// Tạo ID mới cho tạp chí
function createNewMagazineId(data) {
  let maxId = 0;
  data.magazines.forEach((magazine) => {
    if (magazine.id > maxId) {
      maxId = magazine.id;
    }
  });
  return maxId + 1;
}

// Tạo ID mới cho bài viết trong tạp chí
function createNewArticleId(magazine) {
  let maxId = 0;
  magazine.articles.forEach((article) => {
    if (article.id > maxId) {
      maxId = article.id;
    }
  });
  return maxId + 1;
}

// Hiển thị danh sách bài viết trong một tạp chí
function displayArticles(magazine, data) {
  console.log("===== DANH SÁCH BÀI VIẾT =====");

  magazine.articles.forEach((article) => {
    console.log(`${article.id}. ${article.title}`);
  });

  readLine.question(
    "Chọn ID bài viết để xem nội dung (nhập 0 để quay lại): ",
    (articleId) => {
      if (articleId === "0") {
        displayMagazines(data);
        showMenu();
      } else {
        const article = magazine.articles.find(
          (article) => article.id.toString() === articleId
        );

        if (article) {
          console.log("===== NỘI DUNG BÀI VIẾT =====");
          console.log(`ID: ${article.id}`);
          console.log(`Tiêu đề: ${article.title}`);
          console.log(`Nội dung: ${article.content}`);
          readLine.question("Nhấn Enter để tiếp tục...", () => {
            displayArticles(magazine, data);
          });
        } else {
          console.log("Bài viết không tồn tại.");
          displayArticles(magazine, data);
        }
      }
    }
  );
}

// Hiển thị menu và xử lý lựa chọn người dùng
function showMenu() {
  console.log("===== MENU =====");
  console.log("1. Xem danh sách tạp chí và bài viết");
  console.log("2. Thêm dữ liệu vào data.json");
  console.log("0. Thoát");

  readLine.question("Vui lòng chọn tác vụ: ", (choice) => {
    switch (choice) {
      case "1":
        readDataFromFile()
          .then((data) => {
            displayTable(data);
            displayMagazines(data);

            readLine.question(
              "Chọn ID tạp chí để xem danh sách bài viết: ",
              (magazineId) => {
                const magazine = data.magazines.find(
                  (magazine) => magazine.id.toString() === magazineId
                );

                if (magazine) {
                  displayArticles(magazine, data);
                } else {
                  console.log("Tạp chí không tồn tại.");
                  showMenu();
                }
              }
            );
          })
          .catch((error) => {
            console.error("Lỗi khi đọc dữ liệu:", error);
            showMenu();
          });
        break;

      case "2":
        readDataFromFile()
          .then((data) => {
            displayMagazines(data);
            readLine.question("Nhập ID tạp chí: ", (magazineId) => {
              const magazine = data.magazines.find(
                (magazine) => magazine.id.toString() === magazineId
              );

              if (magazine) {
                readLine.question("Nhập tiêu đề bài viết: ", (title) => {
                  readLine.question("Nhập nội dung bài viết: ", (content) => {
                    const newArticle = {
                      id: createNewArticleId(magazine),
                      title: title,
                      content: content,
                    };

                    magazine.articles.push(newArticle);

                    writeDataToFile(data)
                      .then(() => {
                        console.log("Thêm dữ liệu thành công!");
                        displayTable(data);
                        showMenu();
                      })
                      .catch((error) => {
                        console.error("Lỗi khi ghi dữ liệu:", error);
                        showMenu();
                      });
                  });
                });
              } else {
                readLine.question("Nhập tiêu đề tạp chí mới: ", (title) => {
                  const newMagazine = {
                    id: createNewMagazineId(data),
                    title: title,
                    articles: [],
                  };

                  readLine.question(
                    "Nhập tiêu đề bài viết: ",
                    (articleTitle) => {
                      readLine.question(
                        "Nhập nội dung bài viết: ",
                        (articleContent) => {
                          const newArticle = {
                            id: createNewArticleId(newMagazine),
                            title: articleTitle,
                            content: articleContent,
                          };

                          newMagazine.articles.push(newArticle);
                          data.magazines.push(newMagazine);

                          writeDataToFile(data)
                            .then(() => {
                              console.log("Thêm dữ liệu thành công!");
                              displayTable(data);
                              showMenu();
                            })
                            .catch((error) => {
                              console.error("Lỗi khi ghi dữ liệu:", error);
                              showMenu();
                            });
                        }
                      );
                    }
                  );
                });
              }
            });
          })
          .catch((error) => {
            console.error("Lỗi khi đọc dữ liệu:", error);
            showMenu();
          });
        break;

      case "0":
        readLine.close();
        break;

      default:
        console.log("Tùy chọn không hợp lệ.");
        showMenu();
        break;
    }
  });
}

// Chạy chương trình
showMenu();
