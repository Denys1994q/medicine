import { List, ListItem, ListItemText, Divider } from "@mui/material";
import "./Cards.sass";
import ProductCard from "../card/ProductCard";

interface CardsProps {
    cards: any[];
    cardWidth: number;
    isFlex?: boolean;
    isCartBtn?: boolean;
    isQuantityBtn?: boolean;
}

const Cards: React.FC<CardsProps> = ({ cards, cardWidth, isCartBtn, isQuantityBtn, isFlex }) => {
    return (
        <List className={isFlex ? 'cards-list--flex cards-list' : 'cards-list'}  >
            {cards.map((card, index) => (
                <ListItem key={index} sx={{ width: cardWidth }}>
                    <ProductCard
                        title={card.title}
                        image={card.image}
                        price={card.price ? card.price : null}
                        isFlex={isFlex}
                        isQuantityBtn={isQuantityBtn}
                        isCartBtn={isCartBtn}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default Cards;
