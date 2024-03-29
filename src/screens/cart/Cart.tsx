import "./Cart.sass";
import UserForm from "../../components/forms/user-form/User-form";
import Cards from "../../components/cards/Cards";
import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromCart, updateQuantity, createOrder } from "../../store/slices/cart";
import { useNavigate  } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import { Order } from "../../store/slices/models/cart";

export interface UserData {
    name: string, 
    email: string, 
    phone: string, 
    address: string
}

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<UserData | null>(null);
    const dispatch = useAppDispatch();
    const cartProds = useAppSelector(store => store.cart.products);
    const orderIsConfirmed = useAppSelector(store => store.cart.orderIsConfirmed);
    const createOrderError = useAppSelector(store => store.cart.createOrderError);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    
    const handleFormChanges = (values: UserData | null) => {
        values ? setFormValues(values) : setFormValues(null)
    };

    const sendForm = () => {
        if (formValues) {
            const items = cartProds.map(prod => {
                return {
                    productId: prod._id, 
                    quantity: prod.quantity
                }
            })
            const order: Order = {
                userName: formValues.name,
                userEmail: formValues.email,
                userPhone: formValues.phone,
                userAddress: formValues.address,
                items,
                totalPrice: total
            }
            dispatch(createOrder({order}))
        }
    }

    const handleCardDelete = (id: string) => {
        dispatch(removeFromCart(id))
    }

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        dispatch(updateQuantity({productId, newQuantity}))
    }

    useEffect(() => {
        if (orderIsConfirmed) {
            navigate('/order-confirmed')
        }
    }, [orderIsConfirmed])

    const total = useMemo(() => {
        return cartProds.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }, [cartProds]);

    useEffect(() => {
        if (createOrderError) {
            setAlertIsOpen(true);
        } else {
            setAlertIsOpen(false);
        }
    }, [createOrderError])

    return (
        <section className='cart'>
            <div className='cart__main'>
                <div className='cart__form'>
                    <UserForm handleFormChanges={handleFormChanges} />
                </div>
                <div className='cart__cards'>
                    <Cards 
                        cards={cartProds} 
                        cardWidth={600} 
                        onDeleteClick={handleCardDelete}
                        isFlex 
                        isQuantityBtn
                        onQuantityChangeClick={handleQuantityChange} />
                </div>
            </div>
            <div className='cart__total'>
                <p className='total'>Total price: {total} грн. </p>
                <Button 
                    onClick={sendForm} 
                    sx={{ fontSize: "14px" }} 
                    disabled={!formValues || cartProds.length === 0} 
                    variant='contained' 
                    color='primary'>
                    Submit
                </Button>
            </div>
            <Alert
                open={alertIsOpen}
                message={"Sorry, smth is wrong. Try later"}
                severity='error'
                onClose={() => setAlertIsOpen(false)}
            />
        </section>
    );
};

export default Cart;
