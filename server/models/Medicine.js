import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, 
        },
        price: {
            type: Number,
            required: true,
        },
        shop_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shop',
            required: true
        }
    },
);

export default mongoose.model("Medicine", MedicineSchema);