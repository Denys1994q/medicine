import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllShops, getOneShopMedicines } from "../../store/slices/shops";
import { useEffect, useState } from "react";

const Home = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(store => store.shops.shops);
    const medicines = useAppSelector(store => store.shops.shopMedicines);

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    const handleSideBarClick = (id: string) => {
        dispatch(getOneShopMedicines({ id }));
    }

    return (
        <div className='home'>
            <div className='home__sidebar'>
                <SideBar cards={shops} onItemClick={handleSideBarClick} />
            </div>
            <div className='home__cards'>
                <Cards cards={medicines} cardWidth={300} isCartBtn />
            </div>
        </div>
    );
};

export default Home;
