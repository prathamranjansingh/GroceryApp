import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false } //if we dont make this false then data of cart will not be created because we have not given data for the cart
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
