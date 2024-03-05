import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./ProductCard.sass";
import QuantityBtn from "../quantity-btn/Quantity-btn";

const ProductCard = ({ image, id, title, onAddToCart, onDelete, price, isCartBtn, isQuantityBtn, isFlex }: any) => {
    const handleClick = () => {
        if (onAddToCart) {
            onAddToCart();
        }
    };

    const handleDelete = (id: string) => {
        if (onDelete) {
            onDelete(id);
        }
    };

    return (
        <Card className={`${isFlex ? "isFlex" : null} product-card`}>
            {onDelete && (
                <button onClick={() => handleDelete(id)} className='delete-button'>
                    X
                </button>
            )}
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
                    <Button variant='contained' onClick={handleClick} className='product-card__button'>
                        Додати до корзини
                    </Button>
                )}
                {isQuantityBtn && <QuantityBtn />}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
