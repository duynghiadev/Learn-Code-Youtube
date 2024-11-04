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
    connectTimeoutMS: 20000,
    socketTimeoutMS: 45000,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());

// Register
app.post("/user/register", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const isCheckUser = await User.findOne({ email });
    if (isCheckUser) {
      return res.json({
        status: "failure",
        message: "User already exists",
      });
    }

    // Create tokens
    const payload = { email };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30d",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "40d",
    });

    // Create new user with tokens
    const creUser = await User.create({
      email,
      pass,
      accessToken,
      refreshToken,
    });

    return res.json({
      status: "success",
      message: creUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: "error",
      message: "Registration failed",
    });
  }
});

// Login
app.post("/user/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.json({
        status: "failure",
        message: "User doesn't exist",
      });
    }

    if (pass !== isUser.pass) {
      return res.json({
        status: "failure",
        message: "Password incorrect",
      });
    }

    // Check tokens
    const storedAccessToken = isUser.accessToken;
    const storedRefreshToken = isUser.refreshToken;

    if (!storedAccessToken || !storedRefreshToken) {
      return res.json({
        status: "failure",
        message: "User not authenticated. Please register again.",
      });
    }

    // Verify tokens for login
    jwt.verify(storedAccessToken, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return res.json({
          status: "failure",
          message: "Invalid access token. Please login again.",
        });
      }

      jwt.verify(
        storedRefreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err) => {
          if (err) {
            return res.json({
              status: "failure",
              message: "Invalid refresh token. Please login again.",
            });
          }

          // Tokens match, allow login
          return res.json({
            status: "success",
            message: "Login successful",
            accessToken: storedAccessToken,
            refreshToken: storedRefreshToken,
          });
        }
      );
    });
  } catch (error) {
    console.error("Error in /user/login:", error);
    return res.status(500).json({
      status: "error",
    });
  }
});

// listen app
app.listen(PORT, () => {
  console.log(`Authen service running at http://localhost:${PORT}`);
});
