import "./App.sass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";

function App() {
    return (
        <Router>
            <section className='main-container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/cart' element={<Cart />} /> */}
                </Routes>
            </section>
        </Router>
    );
}

export default App;
