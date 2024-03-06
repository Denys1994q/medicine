import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const { userEmail, userName, userAddress, userPhone, items, totalPrice } = req.body;
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
