import "./Header.sass";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useAppSelector } from "../../store/hooks";

const Header: React.FC = () => {
    const products = useAppSelector(store => store.cart.products);
    const itemsInCart = products.reduce((acc: any, item: any) => acc + item.quantity, 0);

    return (
        <AppBar position='static'>
            <Toolbar>
                <ul className='header__list'>
                    <li className="header__list-item">
                        <Link to='/'>Shop</Link>
                    </li>
                    <li className="header__list-item">
                        <Link to='/cart'>
                            <Badge
                                badgeContent={itemsInCart}
                                color='success'
                                sx={{ fontSize: "18px", "& .MuiBadge-badge": { fontSize: "14px", right: -10 } }}
                            >
                                Shopping Cart
                            </Badge>
                        </Link>
                    </li>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
