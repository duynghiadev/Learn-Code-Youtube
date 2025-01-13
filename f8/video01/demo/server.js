const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Fake Database (MySQL, mongoDB)
const db = {
  users: [
    {
      id: 1,
      email: "nguyenvana@gmail.com",
      password: "123456", // ❌ plaintext, ✅ hash
      name: "Nguyen Van A",
    },
  ],
};

// Session: file. redis, memcache (sync disk), database
const sessions = {};

// [GET] /
app.get("/", (req, res) => {
  res.render("pages/index");
});

// [GET] /login
app.get("/login", (req, res) => {
  res.render("pages/login");
});

// [POST] /login
app.post("/login", (req, res) => {
  console.log("req.body:", req.body);

  const { email, password } = req.body;
  const user = db.users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    const sessionId = Date.now().toString();
    sessions[sessionId] = {
      userId: user.id,
    };
    console.log("sessions:", sessions);
    console.log("sessionId:", sessionId);

    res
      .setHeader(
        "Set-Cookie",
        `sessionId=${sessionId}; max-age=300; httpOnly=true`
      )
      .redirect("/dashboard");
    return;
  }

  res.send("Tài khoản và mật khẩu không hợp lệ");
});

// [GET] /dashboard
app.get("/dashboard", (req, res) => {
  const session = sessions[req.cookies.sessionId];
  if (!session) {
    return res.redirect("/login");
  }

  const user = db.users.find((user) => user.id == session.userId);
  if (!user) {
    return res.redirect("/login");
  }

  console.log("req.cookies:", req.cookies);
  res.render("pages/dashboard", { user });
});

// [GET] /logout
app.get("/logout", (req, res) => {
  delete sessions[req.cookies.sessionId];
  res.setHeader("Set-Cookie", "sessionId=; max-age=0").redirect("/login");
});

app.listen(port, () => {
  console.log(`Demo app is running on port ${port}`);
});
