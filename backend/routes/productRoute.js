import express from "express";
import multer from "multer";
import {
  addProduct,
  getProductsList,
  removeProduct,
} from "../controllers/ProductController.js";

const ProductRouter = express.Router();

// image upload

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

ProductRouter.post("/add", upload.single("image"), addProduct);

ProductRouter.get("/list", getProductsList);
ProductRouter.post("/remove/", removeProduct);

export default ProductRouter;
