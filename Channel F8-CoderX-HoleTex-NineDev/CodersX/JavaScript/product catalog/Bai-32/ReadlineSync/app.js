const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/data", (req, res) => {
  fs.readFile("./public/myData.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data file" });
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.post("/data", (req, res) => {
  const newData = req.body;

  fs.readFile("./public/myData.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data file" });
    } else {
      const jsonData = JSON.parse(data);
      jsonData.myStudent.push(newData);

      fs.writeFile("./public/myData.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          res.status(500).json({ error: "Error writing data file" });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});

app.delete("/data/:index", (req, res) => {
  const index = req.params.index;

  fs.readFile("./public/myData.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading data file" });
    } else {
      const jsonData = JSON.parse(data);
      const deletedData = jsonData.myStudent.splice(index, 1);

      fs.writeFile("./public/myData.json", JSON.stringify(jsonData), (err) => {
        if (err) {
          res.status(500).json({ error: "Error writing data file" });
        } else {
          res.json({ success: true, deletedData });
        }
      });
    }
  });
});

app.post("/save", (req, res) => {
  // Perform necessary operations to save data or perform cleanup
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
