import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { resetOrderStatus } from "../../store/slices/cart";

const OrderConfirmed: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(resetOrderStatus())
    }, [])

    return (
        <>
            Thanks. Order is confirmed! Wait for the delivery.
        </>
    )
}

export default OrderConfirmed;