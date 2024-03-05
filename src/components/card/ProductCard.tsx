import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./ProductCard.sass"; 
import QuantityBtn from "../quantity-btn/Quantity-btn";

const ProductCard = ({ image, title, onAddToCart, price, isCartBtn, isQuantityBtn, isFlex }: any) => {
    return (
        <Card className={`${isFlex ? "isFlex" : null} product-card`}>
            <CardMedia className='product-card__media' component='img' image={image} alt={title} />
            <CardContent className={isFlex ? "card-content--flex" : ""}>
                <Typography variant='h4' component='h4' className='product-card__title'>
                    {title}
                </Typography>
                {price && (
                    <Typography variant='h4' component='h4' className='product-card__title'>
                        Price: {price}
                    </Typography>
                )}
                {isCartBtn && (
                    <Button variant='contained' onClick={onAddToCart} className='product-card__button'>
                        Додати до корзини
                    </Button>
                )}
                {isQuantityBtn && <QuantityBtn />}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
