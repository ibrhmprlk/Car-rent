import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

/*
import express from "express";//import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
*/
/*
import Product from "./models/product-model.js";
import mongoose from "mongoose";
*/
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve();
app.use(express.json());  // allows us to accept JSON in the body req.body
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV ==="production"){
  app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});
}

/*
app.get("/api/products", async (req, res) =>{
  try{
    const products = await Product.find({});
    res.status(200).json({success: true, data: products});
  }
  catch(error){
    console.log("Error in fetching products:", error.Message);
    res.status(500).json({success: false, Message:"Server Error"});
  }
})
app.post("/api/products", async (req, res) => {
  const product = req.body;//user will send this data 
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, Message: "Please provide all fields" });
  }
  const newProduct = new Product(product)
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.Message);
    res.status(500), json({ success: false, Message: "Server Error" });
  }
});
app.put("/api/products/:id", async(req, res) => {
const{ id }= req.params;
const product = req.body;
if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({success:false, Message:"Invalid Product Id"});
}
try
{
 const updateProduct = await Product.findByIdAndUpdate(id, product,{new:true});
res.status(200).json({success:true,data:updateProduct});
}
catch(error){
  res.status(500).json({success:false,Message:"server error"});
}
});

app.delete("/api/products/:id", async (req, res) =>{ 
  const{id} = req.params;
 // console.log("id:",id);
 try{
await Product.findByIdAndDelete(id);
res.status(200).json({success: true, Message:"Product deleted"});
 }
 catch(error)
 {
console.log("error in deleting product:",error.Message);
res.status(404).json({success:false,Message:"Product not found"});
}
});
*/

app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:'+PORT);
});
