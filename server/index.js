import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { ShopsController, MedicineController } from "./controllers/index.js";

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
};
app.use(cors(corsOptions));

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Ok"))
    .catch(err => console.log("ERROR", err));

// get all shops
app.get("/shops", ShopsController.getAllShops);
// get shop medicines
app.get("/medicines/:shop_id", MedicineController.getShopMedicines);

app.listen("4444", err => {
    if (err) {
        return console.log(err);
    }
    console.log("Server OK");
});
