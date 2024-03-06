import "./App.sass";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import Header from "./components/header/Header";
import OrderConfirmed from "./screens/order-confirmed/Order-confirmed";
import NotFound from "./screens/not-found/NotFound";
import History from "./screens/history/History";

function App() {
    return (
        <>
            <div className="header-wrapper">
                <Header />
            </div>
            <main className='main-container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order-confirmed' element={<OrderConfirmed />} />
                    <Route path='/history' element={<History />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
