import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./ProductCard.sass";
import QuantityBtn from "../quantity-btn/Quantity-btn";

export interface IProdCard {
    image: string;
    id: string;
    title: string;
    startQuantity?: number;
    price?: number;
}

export interface ProductCardProps extends IProdCard {
    isCartBtn?: boolean;
    isQuantityBtn?: boolean;
    isFlex?: boolean;
    onAddToCart?: () => void;
    onDelete?: (id: string) => void;
    onQuantityChange?: (id: string, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    id,
    title,
    startQuantity,
    onAddToCart,
    onDelete,
    onQuantityChange,
    price,
    isCartBtn,
    isQuantityBtn,
    isFlex,
}) => {
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

    const handleQuantityChange = (quantity: number) => {
        if (onQuantityChange) {
            onQuantityChange(id, quantity);
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
                        Price: {price} грн.
                    </Typography>
                )}
                {isCartBtn && (
                    <Button variant='contained' onClick={handleClick} className='product-card__button'>
                        Додати до корзини
                    </Button>
                )}
                {isQuantityBtn && <QuantityBtn onQuantityBtnChange={handleQuantityChange} startValue={startQuantity} />}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
