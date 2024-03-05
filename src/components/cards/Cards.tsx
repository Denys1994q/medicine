import { List, ListItem, Typography } from "@mui/material";
import "./Cards.sass";
import ProductCard from "../card/ProductCard";

interface CardsProps {
    cards: any[];
    cardWidth: number;
    isFlex?: boolean;
    isCartBtn?: boolean;
    isQuantityBtn?: boolean;
    addToCartClick?: (card: any) => void;
    onDeleteClick?: (id: string) => void;
    onQuantityChangeClick?: (id: string, quantity: number) => void;
}

const Cards: React.FC<CardsProps> = ({
    cards,
    onDeleteClick,
    cardWidth,
    addToCartClick,
    onQuantityChangeClick,
    isCartBtn,
    isQuantityBtn,
    isFlex,
}) => {
    return (
        <List className={isFlex ? "cards-list--flex cards-list" : "cards-list"}>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <ListItem key={index} sx={{ width: cardWidth }}>
                        <ProductCard
                            id={card._id}
                            title={card.name}
                            image={card.image}
                            price={card.price ? card.price : null}
                            isFlex={isFlex}
                            isQuantityBtn={isQuantityBtn}
                            isCartBtn={isCartBtn}
                            onAddToCart={addToCartClick ? () => addToCartClick(card) : undefined}
                            onDelete={onDeleteClick}
                            onQuantityChange={onQuantityChangeClick}
                            startQuantity={card.quantity}
                        />
                    </ListItem>
                ))
            ) : (
                <Typography variant='body1' component='p' sx={{ fontSize: "16px" }}>
                    Nothing found
                </Typography>
            )}
        </List>
    );
};

export default Cards;
