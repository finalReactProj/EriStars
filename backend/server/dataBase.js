import mongoose from "mongoose";
import dotenv from "dotenv/config";
export const db = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

  