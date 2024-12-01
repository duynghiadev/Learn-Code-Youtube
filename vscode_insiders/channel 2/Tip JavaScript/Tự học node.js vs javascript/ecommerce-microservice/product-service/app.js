require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7070;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");

const amqpserver = "amqp://localhost:5672";

// util
const { isAuthenticated } = require("./isAuthenticated");

// Model
const Product = require("./product");

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
    console.log("Product Connected to MongoDB");
  }
);

var channel, connection;
// connect amqp
async function connect_amqp() {
  connection = await amqp.connect(amqpserver);
  channel = await connection.createChannel();
  await channel.assertQueue("BUY_PRODUCT");
}
connect_amqp();

app.use(express.json());

// step 2: Sửa khi tạo sản phẩm thì mua
app.post("/product/buy", async (req, res) => {
  /**
   * Khi mua thì nên push qua task khác, vậy mới gọi là microservice.
   * Ở đây mua xong phải response về cho khách hàng, tạo cảm giác nhanh
   * Còn việc giảm giá, tích luỹ điểm thì nên cho thằng khác làm, tránh ảnh hưởng đến UX của khách hàng
   * Vậy mới dùng đến rabbitMQ
   */
  // ids is Array[id1, id2] vì khách hàng có thể mua nhiều thứ
  const { ids } = req.body;
  if (!Array.isArray(ids)) {
    return res.json({
      message: "is Array", // chú ý: chỗ này không nên thông báo quá rõ, chống hack...
    });
  }
  // tìm kiếm sản phẩm mua trong product mongodb
  const products = await Product.find({
    _id: {
      $in: ids,
    },
  });

  // không tìm thấy thì push data này qua order service
  channel.sendToQueue(
    "ORDER_PRODUCT",
    Buffer.from(
      JSON.stringify({
        products, // danh sách đặt hàng
        email: req.user.email, // email người đặt mua, lấy ra từ token
      })
    )
  );

  return res.json({
    message: products,
  });
});

// step 1: tạo sản phẩm
app.post("/product/create", isAuthenticated, async (req, res) => {
  /**
   * Notes: Trước khi có thể tạo sản phẩm, đương nhiên là phải check token. Việc check token có thể check tại đây, nhưng không nên làm thế
   * Chúng ta phải tạo 1 file đại loại như là middleware vậy đó
   */
  const { name, price, description } = req.body;
  const creProduct = await Product.create({
    name,
    price,
    description,
  });

  return res.json({
    message: creProduct,
  });
});

// listen app
app.listen(PORT, () => {
  console.log(`Product service running at http://localhost:${PORT}`);
});
