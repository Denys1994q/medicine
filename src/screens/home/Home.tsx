import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllShops, getOneShopMedicines } from "../../store/slices/shops";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/slices/cart";

const Home = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(store => store.shops.shops);
    const medicines = useAppSelector(store => store.shops.shopMedicines);

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    useEffect(() => {
        if (shops.length > 0) {
            dispatch(getOneShopMedicines({ id: shops[0]._id }));
        }
    }, [shops]);

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    const handleSideBarClick = (id: string) => {
        dispatch(getOneShopMedicines({ id }));
    };

    const handleAddToCartClick = (card: any) => {
        dispatch(addToCart(card));
    };

    return (
        <div className='home'>
            <div className='home__sidebar'>
                <SideBar cards={shops} onItemClick={handleSideBarClick} isFirstActive />
            </div>
            <div className='home__cards'>
                <Cards cards={medicines} cardWidth={300} addToCartClick={handleAddToCartClick} isCartBtn />
            </div>
        </div>
    );
};

export default Home;
