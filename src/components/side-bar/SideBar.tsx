import { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import "./SideBar.sass";

interface SideBarCard {
    name: string;
    _id: string;
}

interface SideBarProps {
    cards: SideBarCard[];
    isFirstActive?: boolean;
    activeItemId: string,
    onItemClick?: (id: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ cards, isFirstActive, activeItemId, onItemClick }) => {
    // const [activeItemId, setActiveItemId] = useState<string | null>(null); 

    // useEffect(() => {
    //     if (isFirstActive && cards && cards.length > 0) {
    //         setActiveItemId(cards[0]._id);
    //     }
    // }, []);

    const handleClick = (id: string) => {
        if (onItemClick) {
            onItemClick(id);
        }
        // setActiveItemId(id);
    };

    return (
        <>
            <Typography variant='h4' gutterBottom textAlign='center'>
                Shops:
            </Typography>
            <List>
                {cards && cards.length > 0
                    ? cards.map((card: SideBarCard) => (
                          <ListItem
                              key={card._id}
                              onClick={() => handleClick(card._id)}
                              sx={{
                                  cursor: "pointer",
                                  "&:hover": { backgroundColor: "lightgray" },
                                  backgroundColor: activeItemId === card._id ? "lightblue" : "inherit",
                              }} >
                              <ListItemText
                                  primary={
                                      <Typography variant='h4' textAlign='center'>
                                          {card.name}
                                      </Typography>
                                  }
                              />
                          </ListItem>
                      ))
                    : null}
            </List>
        </>
    );
};

export default SideBar;
