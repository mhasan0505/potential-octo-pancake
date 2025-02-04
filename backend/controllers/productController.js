import fs from "fs";
import ProductModel from "../models/productModel.js";

// add product

const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new ProductModel({
    name: req.body.name,
    image: image_filename,
    price: req.body.price,
    category: req.body.category,
    brand: req.body.brand,
  });
  try {
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.json({ succes: false, message: "Failed to add product" });
  }
};
// product list

const getProductsList = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({ success: true, data: products });
  } catch (error) {
    res.json({ success: false, message: "Failed to get products" });
  }
};

//  remove product

const removeProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    fs.unlink(`./uploads/${product.image}`, (err) => {});

    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    res.json({ success: false, message: "Failed to remove product" });
  }
};

export { addProduct, getProductsList, removeProduct };
