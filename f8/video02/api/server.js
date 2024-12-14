const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Tránh CORS issue khi truyền token
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fake DB
const db = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "123456",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      password: "123456",
    },
  ],
  posts: [
    {
      id: 1,
      title: "My First Post",
      description: "This is my first blog post!",
    },
    {
      id: 2,
      title: "My Second Post",
      description: "This is my second blog post!",
    },
    {
      id: 3,
      title: "My Third Post",
      description: "This is my third blog post!",
    },
  ],
};

// Session
const sessions = {};

// [GET] /api/posts
app.get("/api/posts", (req, res) => {
  res.json(db.posts);
});

// [POST] /api/auth/login
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = db.users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const sessionId = Date.now().toString();
  sessions[sessionId] = { sub: user.id };

  res
    .setHeader("Set-Cookie", `sessionId=${sessionId}; httpOnly; max-age:3600`)
    .json(user);
});

// [GET] /api/auth/me
app.get("/api/auth/me", (req, res) => {
  const session = sessions[req.cookies.sessionId];
  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = db.users.find((user) => user.id === session.sub);
  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  console.log(req.cookies);
  res.json(user);
});

app.listen(port, () => {
  console.log("Demo listening on port " + port);
});
