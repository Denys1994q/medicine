import "./App.sass";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import Header from "./components/header/Header";
import OrderConfirmed from "./screens/order-confirmed/Order-confirmed";

function App() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order-confirmed' element={<OrderConfirmed />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
