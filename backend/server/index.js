
import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import router from "./router.js";
import { db } from "./dataBase.js";
import cookieParser from "cookie-parser"
import route from "./admin.js";

const port = process.env.PORT || 3001;
const app = express();
app.use(cookieParser())
app.use(
  cors({
    origin: `http://localhost:5173`, 
    credentials: true
  })
);
app.use(express.json());
db
app.use(router);
app.use(route)
app.listen(port, () => { 
    console.log(`server is listening on port ${port}`)
})



