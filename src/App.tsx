import "./App.sass";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
