import "./Cart.sass";
import UserForm from "../../components/forms/user-form/User-form";
import Cards from "../../components/cards/Cards";
import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromCart, updateQuantity, createOrder } from "../../store/slices/cart";
import { useNavigate  } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<any>(null);
    const dispatch = useAppDispatch();
    const cartProds = useAppSelector(store => store.cart.products);
    const orderIsConfirmed = useAppSelector(store => store.cart.orderIsConfirmed);
    
    const handleFormChanges = (values: any) => {
        if (values) {
            setFormValues(values)
        } else {
            setFormValues(null)
        }
    };

    const sendForm = () => {
        if (formValues) {
            const items = cartProds.map((prod: any) => {
                return {
                    productId: prod._id, 
                    quantity: prod.quantity
                }
            })
            const order = {
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
        return cartProds.reduce((acc: number, item: any) => {
            return acc + item.price * item.quantity;
        }, 0);
    }, [cartProds]);

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
        </section>
    );
};

export default Cart;
