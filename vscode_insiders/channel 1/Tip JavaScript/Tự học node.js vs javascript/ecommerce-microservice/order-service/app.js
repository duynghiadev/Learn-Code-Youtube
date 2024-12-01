const amqp = require("amqplib");
const mongoose = require("mongoose");

const amqpserver = "amqp://localhost:5672";

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
    console.log("Order Connected to MongoDB");
  }
);

var channel, connection;
// connect amqp
async function connect_amqp() {
  connection = await amqp.connect(amqpserver);
  channel = await connection.createChannel();
  await channel.assertQueue("ORDER_PRODUCTION");
}
connect_amqp().then(() => {
  channel.consumer("ORDER_PRODUCTION", (data) => {
    console.log("có người mua hàng rồi:", JSON.parse(data.content));
  });
});

// thử test xem order có nhấn order với RabbitMQ không
