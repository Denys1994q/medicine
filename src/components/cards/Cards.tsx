import { List, ListItem, ListItemText, Divider } from "@mui/material";
import "./Cards.sass";
import ProductCard from "../card/ProductCard";

interface CardsProps {
    cards: any[];
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
    return (
        <List className='cards-list'>
            {cards.map((card, index) => (
                <ListItem key={index} sx={{ width: 400 }}>
                    <ProductCard title={card.title} image={card.image} />
                </ListItem>
            ))}
        </List>
    );
};

export default Cards;
