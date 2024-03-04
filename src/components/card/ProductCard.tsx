import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./ProductCard.sass"; // Підключення стилів для компонента

const ProductCard = ({ image, title, onAddToCart }: any) => {
    return (
        <Card className='product-card'>
            <CardMedia className='product-card__media' component='img' image={image} alt={title} />
            <CardContent>
                <Typography variant='h4' component='h4' className='product-card__title'>
                    {title}
                </Typography>
                <Button variant='contained' onClick={onAddToCart} className='product-card__button'>
                    Додати до корзини
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
