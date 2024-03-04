import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";

interface InputProps {
    type: string;
    name: string;
    label: string;
    variant?: "standard" | "outlined" | "filled";
    fullWidth?: boolean;
    multiline?: boolean;
}

const TextInput: React.FC<InputProps> = ({
    type,
    name,
    label,
    variant = "outlined",
    fullWidth = true,
    multiline = false,
}) => {
    return (
        <Box>
            <Field
                as={TextField}
                type={type}
                name={name}
                label={label}
                variant={variant}
                fullWidth={fullWidth}
                multiline={multiline}
                InputProps={{
                    sx: { fontSize: "14px" },
                }}
                InputLabelProps={{
                    sx: { fontSize: "14px" },
                }}
            />
            <Box sx={{ padding: "5px", lineHeight: 1, color: "red" }}>
                <ErrorMessage name={name} component='div' />
            </Box>
        </Box>
    );
};

export default TextInput;
