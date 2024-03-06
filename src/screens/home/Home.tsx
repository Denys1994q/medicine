import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllShops, getOneShopMedicines, setActiveShopId } from "../../store/slices/shops";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/slices/cart";
import Alert from "../../components/alert/Alert";

const Home = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(store => store.shops.shops);
    const shopsErr = useAppSelector(store => store.shops.getAllShopsError);
    const medicinesErr = useAppSelector(store => store.shops.getOneShopMedicinesError);
    const medicinesLoading = useAppSelector(store => store.shops.getOneShopMedicinesLoading);
    const activeShopId = useAppSelector(store => store.shops.activeShopId);
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    const handleSideBarClick = (id: string) => {
        dispatch(setActiveShopId(id));
    };

    const handleAddToCartClick = (card: any) => {
        dispatch(addToCart(card));
    };

    useEffect(() => {
        dispatch(getOneShopMedicines({ id: activeShopId }));
    }, [activeShopId]);

    useEffect(() => {
        shopsErr ? setAlertIsOpen(true) : setAlertIsOpen(false);
    }, [shopsErr]);

    const activeShop = shops && shops.length > 0 ? shops.find((shop: any) => shop._id === activeShopId) : null;
    const medicines = activeShop ? activeShop?.medicines : [];

    return (
        <div className='home'>
            <div className='home__sidebar'>
                {shops && shops.length > 0 ? (
                    <SideBar cards={shops} activeItemId={activeShopId} onItemClick={handleSideBarClick} isFirstActive />
                ) : null}
            </div>
            <div className='home__cards'>
                {medicinesLoading && "Loading" }
                {medicines && medicines.length > 0 && <Cards cards={medicines} cardWidth={300} addToCartClick={handleAddToCartClick} isCartBtn />}
            </div>
            <Alert
                open={alertIsOpen}
                message={"Sorry, smth is wrong. Try later"}
                severity='error'
                onClose={() => setAlertIsOpen(false)}
            />
        </div>
    );
};

export default Home;
