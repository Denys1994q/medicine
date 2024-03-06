import './Order-confirmed.sass'
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { resetOrderStatus } from "../../store/slices/cart";

const OrderConfirmed: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetOrderStatus());
    }, []);

    return <h3 className="order-status">
        Thanks. Order is confirmed! Wait for the delivery.
        </h3>;
};

export default OrderConfirmed;
