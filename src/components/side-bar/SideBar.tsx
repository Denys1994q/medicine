import { Typography, List, ListItem, ListItemText } from "@mui/material";
import "./SideBar.sass";

const SideBar = () => {
    // Масив із назвами аптек
    const pharmacies = ["Pharmacy 1", "Pharmacy 2", "Pharmacy 3", "Pharmacy 4"];

    return (
        <>
            <Typography variant='h4' gutterBottom textAlign='center'>
                Shops:
            </Typography>
            <List>
                {/* Проходження по масиву назв аптек та створення елементів списку */}
                {pharmacies.map((pharmacy, index) => (
                    <ListItem key={index}>
                        {/* Використання стилів для тексту назв аптек */}
                        <ListItemText
                            primary={
                                <Typography variant='h3' textAlign='center'>
                                    {pharmacy}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default SideBar;
