import "./Cart.sass";
import UserForm from "../../components/forms/user-form/User-form";
import Cards from "../../components/cards/Cards";
import { Button } from "@mui/material";
import { useState } from "react";

const Cart = () => {
    const [isValid, setIsValid] = useState(false);
    const cards = [
        {
            image: "https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg",
            title: "Paracetamol",
            price: 200,
        },
        {
            image: "https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg",
            title: "Paracetamol",
        },
        {
            image: "https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg",
            title: "Paracetamol",
        },
    ];

    const handleFormChanges = (isValid: boolean) => {
        console.log(isValid);
        if (isValid) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    };

    return (
        <section className='cart'>
            <div className='cart__main'>
                <div className='cart__form'>
                    <UserForm handleFormChanges={handleFormChanges} />
                </div>
                <div className='cart__cards'>
                    <Cards cards={cards} cardWidth={600} isFlex isQuantityBtn />
                </div>
            </div>
            <div className='cart__total'>
                <p className='total'>Total price: 900</p>
                <Button sx={{ fontSize: "14px" }} disabled={!isValid} variant='contained' color='primary'>
                    Submit
                </Button>
            </div>
        </section>
    );
};

export default Cart;
