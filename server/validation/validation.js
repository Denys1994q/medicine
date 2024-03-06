import { body } from "express-validator";

export const createOrderValidation = [
    body("email").isEmail().withMessage("Invalid email address"),
    body("name").notEmpty().withMessage("Name is required"),
    body("address").notEmpty().withMessage("Address is required"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("items").isArray({ min: 1 }).withMessage("At least one item is required"),
];
