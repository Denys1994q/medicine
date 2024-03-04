import { List, ListItem, ListItemText, Divider } from "@mui/material";
import "./Cards.sass";
import ProductCard from "../card/ProductCard";

interface CardsProps {
    cards: any[];
    cardWidth: number;
    isFlex?: boolean;
    isCartBtn?: boolean;
}

const Cards: React.FC<CardsProps> = ({ cards, cardWidth, isCartBtn, isFlex }) => {
    return (
        <List className='cards-list'>
            {cards.map((card, index) => (
                <ListItem key={index} sx={{ width: cardWidth }}>
                    <ProductCard
                        title={card.title}
                        image={card.image}
                        price={card.price ? card.price : null}
                        isFlex={isFlex}
                        isCartBtn={isCartBtn}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default Cards;
