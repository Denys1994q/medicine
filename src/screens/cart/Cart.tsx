import "./Cart.sass";
import UserForm from "../../components/forms/user-form/User-form";
import Cards from "../../components/cards/Cards";
import { Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromCart } from "../../store/slices/cart";

const Cart = () => {
    const [formValues, setFormValues] = useState(null);
    const dispatch = useAppDispatch();
    const cartProds = useAppSelector(store => store.cart.products);

    const handleFormChanges = (values: any) => {
        if (values) {
            setFormValues(values)
        } else {
            setFormValues(null)
        }
    };

    const sendForm = () => {
        console.log(formValues)
    }

    const handleCardDelete = (id: string) => {
        console.log(id)
        dispatch(removeFromCart(id))
    }

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
                        isQuantityBtn />
                </div>
            </div>
            <div className='cart__total'>
                <p className='total'>Total price: 900</p>
                <Button onClick={sendForm} sx={{ fontSize: "14px" }} disabled={!formValues} variant='contained' color='primary'>
                    Submit
                </Button>
            </div>
        </section>
    );
};

export default Cart;
