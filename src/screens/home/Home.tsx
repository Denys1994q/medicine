import "./Home.sass";
import SideBar from "../../components/side-bar/SideBar";
import Cards from "../../components/cards/Cards";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllShops, getOneShopMedicines, setActiveShopId } from "../../store/slices/shops";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/slices/cart";
import Alert from "../../components/alert/Alert";
import SortPanel from "../../components/sort-panel/Sort-panel";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Medicine } from "../../store/slices/models/shops";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector(store => store.shops.shops);
    const shopsErr = useAppSelector(store => store.shops.getAllShopsError);
    const medicinesErr = useAppSelector(store => store.shops.getOneShopMedicinesError);
    const medicinesLoading = useAppSelector(store => store.shops.getOneShopMedicinesLoading);
    const activeShopId = useAppSelector(store => store.shops.activeShopId);
    const [alertIsOpen, setAlertIsOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");

    useEffect(() => {
        dispatch(getAllShops());
    }, []);

    const handleSideBarClick = (id: string) => {
        dispatch(setActiveShopId(id));
    };

    const handleAddToCartClick = (card: Medicine) => {
        dispatch(addToCart(card));
    };

    useEffect(() => {
        if (activeShopId) {
            setSortOrder("");
            dispatch(getOneShopMedicines({ id: activeShopId }));
        }
    }, [activeShopId]);

    useEffect(() => {
        shopsErr || medicinesErr ? setAlertIsOpen(true) : setAlertIsOpen(false);
    }, [shopsErr, medicinesErr]);

    const activeShop = shops && shops.length > 0 ? shops.find(shop => shop._id === activeShopId) : null;
    const medicines = activeShop ? activeShop?.medicines : [];

    const sortedMedicines =
        medicines && medicines.length > 0 && sortOrder
            ? [...medicines].sort((a, b) => {
                  const priceA = a.price;
                  const priceB = b.price;
                  if (sortOrder === "asc") {
                      return priceA - priceB;
                  } else {
                      return priceB - priceA;
                  }
              })
            : null;

    return (
        <>
            <Box sx={{ position: "fixed", top: 60, left: 0, width: "100%", marginTop: "5px" }}>
                {medicinesLoading && <LinearProgress />}
            </Box>
            <div className='home'>
                <div className='home__sidebar'>
                    {shops && shops.length > 0 ? (
                        <SideBar
                            cards={shops}
                            activeItemId={activeShopId}
                            onItemClick={handleSideBarClick}
                            isFirstActive
                        />
                    ) : null}
                </div>
                <div className='home__cards'>
                    {!activeShopId && <h2 className="selectShop">Please select a shop.</h2>}
                    {medicines && medicines.length > 0 && (
                        <>
                            <div className='sort-panel'>
                                <SortPanel sortOrder={sortOrder} setSortOrder={setSortOrder} />
                            </div>
                            <Cards
                                cards={sortedMedicines ? sortedMedicines : medicines}
                                cardWidth={300}
                                addToCartClick={handleAddToCartClick}
                                isCartBtn
                            />
                        </>
                    )}
                </div>
                <Alert
                    open={alertIsOpen}
                    message={shopsErr || medicinesErr}
                    severity='error'
                    onClose={() => setAlertIsOpen(false)}
                />
            </div>
        </>
    );
};

export default Home;
