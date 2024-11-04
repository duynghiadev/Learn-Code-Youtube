require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 6060;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Model
const User = require("./user");

// connect mongodb
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 20000, // Increase connection timeout
    socketTimeoutMS: 45000, // Increase socket timeout
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());

// register
app.post("/user/register", async (req, res) => {
  try {
    const { email, pass } = req.body;
    // check xem email nay ton tai chua
    const isCheckUser = await User.findOne({ email });
    if (isCheckUser) {
      return res.json({
        status: "success",
        message: `User already exist`,
      });
    }

    // nếu chưa có thì cho phép đăng ký làm thành viên
    // const objUser = {
    //   email,
    //   pass
    // }

    // nên sửa lại chỗ này, nếu mà objUser không được sử dụng lại thì không cần phải khai báo. Vì khai báo sẽ mất thêm memory...
    const creUser = await User.create({
      email,
      pass,
    });

    return res.json({
      status: "success",
      message: creUser,
    });
  } catch (error) {
    console.error(`Error: `, error);
    return json.status(500).json({
      status: "error",
    });
  }
});

// login
app.post("/user/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const isUser = await User.findOne({ email });
    console.log(">>> User found:", isUser);
    if (!isUser) {
      return res.json({
        status: "success",
        message: `User doesn't exist`,
      });
    }

    // nếu user tồn tại thì check tiếp pass xem có trùng không
    if (pass !== isUser.pass) {
      return res.json({
        status: "success",
        message: "Password incorrect",
      });
    }

    // is okay thì tạo token, sử dụng jsonwebtoken
    const payload = {
      email,
    };

    jwt.sign(payload, "secret", (err, token) => {
      if (err) console.log(err);
      else
        return res.json({
          status: "success",
          token,
        });
    });
  } catch (error) {
    console.error(`Error: /user/login:`, error);
    return json.status(500).json({
      status: "error",
    });
  }
});

// listen app
app.listen(PORT, () => {
  console.log(`Authen at http://localhost:${PORT}`);
});
