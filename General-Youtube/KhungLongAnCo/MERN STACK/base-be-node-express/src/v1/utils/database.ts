import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(String(process.env.MONGO_URI))
    .then((res) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.error(err));
};
