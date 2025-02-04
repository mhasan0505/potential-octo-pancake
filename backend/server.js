import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import ProductRouter from "./routes/productRoute.js";
import UserRouter from "./routes/UserRoute.js";
import orderRoutes from "./routes/orderRoutes.js";
// app config

const app = express();
const port = process.env.PORT || 7002;

// middlewares
app.use(cors());
app.use(express.json());

// db connection

connectDB();

// api endpoints

app.use("/api/products", ProductRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", UserRouter);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
