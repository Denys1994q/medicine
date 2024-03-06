import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";

interface QuantityBtnProps {
    onQuantityBtnChange: (quantity: number) => void,
    startValue?: number
}

const QuantityBtn: React.FC<QuantityBtnProps> = ({ onQuantityBtnChange, startValue = 1 }) => {
    const [quantity, setQuantity] = useState(startValue);

    const handleIncrement = () => {
        setQuantity((prevQuantity: number) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity: number) => prevQuantity - 1);
        }
    };

    useEffect(() => {
        onQuantityBtnChange(quantity);
    }, [quantity]);

    return (
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button onClick={handleDecrement} variant='text' style={{ fontSize: "12px" }}>
                <Typography variant='h4'>-</Typography>
            </Button>
            <Typography variant='h5'>{quantity}</Typography>
            <Button onClick={handleIncrement} variant='text' style={{ fontSize: "12px" }}>
                <Typography variant='h4'>+</Typography>
            </Button>
        </Box>
    );
};

export default QuantityBtn;
