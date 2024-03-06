import Order from "../models/Order.js";
import Medicine from "../models/Medicine.js";

export const createOrder = async (req, res) => {
    try {
        const { userEmail, userName, userAddress, userPhone, items, totalPrice } = req.body;

        for (const item of items) {
            const productExists = await Medicine.findById(item.productId);
            if (!productExists) {
                return res.status(400).json({ error: `Product with ID ${item.productId} not found` });
            }
        }

        const newOrder = new Order({
            userEmail,
            userName,
            userAddress,
            userPhone,
            items,
            totalPrice,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        // Обробити помилку
        console.error("Error creating order:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};