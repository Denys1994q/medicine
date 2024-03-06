import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllShops, getOneShopMedicines, setActiveShopId } from "../../store/slices/shops";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/slices/cart";

const Home = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(store => store.shops.shops);
    const activeShopId = useAppSelector(store => store.shops.activeShopId);

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    const handleSideBarClick = (id: string) => {
        dispatch(setActiveShopId(id))
    };

    const handleAddToCartClick = (card: any) => {
        dispatch(addToCart(card));
    };

    useEffect(() => {
        dispatch(getOneShopMedicines({ id: activeShopId }));
    }, [activeShopId])

    const activeShop = shops && shops.length > 0 ? shops.find((shop: any)=> shop._id === activeShopId) : null
    const medicines = activeShop ? activeShop?.medicines : [];

    return (
        <div className='home'>
            <div className='home__sidebar'>
                {shops && shops.length > 0 ? <SideBar cards={shops} onItemClick={handleSideBarClick} isFirstActive /> : null}
            </div>
            <div className='home__cards'>
                <Cards cards={medicines} cardWidth={300} addToCartClick={handleAddToCartClick} isCartBtn />
            </div>
        </div>
    );
};

export default Home;
