import "./Cart.sass";
import UserForm from "../../components/forms/user-form/User-form";

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__form">
                <UserForm />
            </div>
        </div>
    );
};

export default Cart;
