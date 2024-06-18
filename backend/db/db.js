import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prathamranjan3:7s1Y71IUBtRbLwET@cluster0.lx86esv.mongodb.net/GroceryApp"
    )
    .then(() => console.log("DB connected"));
};

//mongodb+srv://prathamranjan3:7s1Y71IUBtRbLwET@cluster0.lx86esv.mongodb.net/
