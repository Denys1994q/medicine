import { Typography, List, ListItem, ListItemText } from "@mui/material";
import "./SideBar.sass";

interface SideBarCard {
    name: string;
    id: string;
}

interface SideBarProps {
    cards: SideBarCard[];
}

const SideBar: React.FC<SideBarProps> = ({ cards }) => {
    return (
        <>
            <Typography variant='h4' gutterBottom textAlign='center'>
                Shops:
            </Typography>
            <List>
                {cards && cards.length > 0
                    ? cards.map((card: SideBarCard, index: number) => (
                          <ListItem
                              key={card.id}
                              sx={{ cursor: "pointer", "&:hover": { backgroundColor: "lightgray" } }}
                          >
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
