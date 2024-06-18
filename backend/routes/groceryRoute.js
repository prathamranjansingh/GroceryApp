import express from "express";
import {
  addgrocery,
  listgrocery,
  removegrocery,
} from "../controllers/groceryController.js";

import multer from "multer"; //middleware for handling multipart/form-data, primarily used for uploading files.

const groceryRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // generate a unique filename for each uploaded file based on the current timestamp appended with the original filename.
  },
});

const upload = multer({ storage: storage });

groceryRouter.post("/add", upload.single("image"), addgrocery);

groceryRouter.get("/list", listgrocery);
groceryRouter.post("/remove", removegrocery);
export default groceryRouter;
