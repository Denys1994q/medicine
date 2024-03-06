import React from "react";
import { Snackbar, Alert as MuiAlert, AlertColor } from "@mui/material";

interface AlertProps {
    open: boolean;
    severity: AlertColor;
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ open, severity, message, onClose }) => {
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
            <MuiAlert elevation={6} variant='filled' onClose={onClose} severity={severity} sx={{ fontSize: "16px" }}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default Alert;
