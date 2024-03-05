import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

const QuantityBtn = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <Box sx={{ display: "flex", gap: "10px", alignItems: 'center' }}>
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
