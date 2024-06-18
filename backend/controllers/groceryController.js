import groceryModel from "../models/groceryModel.js";
import fs from "fs";

//add grocery item

const addgrocery = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const grocery = new groceryModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await grocery.save();
    res.json({ success: true, message: "Grocery Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//all grocery list
const listgrocery = async (req, res) => {
  try {
    const grocerys = await groceryModel.find({});
    res.json({ success: true, data: grocerys });
  } catch (error) {
    console.log(error);
    res.json({ success: false, data: "error" });
  }
};

//remove grocery item
const removegrocery = async (req, res) => {
  try {
    const grocery = await groceryModel.findById(req.body.id);
    fs.unlink(`uploads/${grocery.image}`, () => {});

    await groceryModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "grocery Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addgrocery, listgrocery, removegrocery };
