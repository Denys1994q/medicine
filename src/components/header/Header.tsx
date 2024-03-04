import "./Header.sass";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <ul className='header__list'>
                    <li>
                        <Link to='/'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Shopping Cart</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
