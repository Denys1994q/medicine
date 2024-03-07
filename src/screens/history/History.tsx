import "./History.sass";
import TextInput from "../../components/inputs/text-input/Text-input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Cards from "../../components/cards/Cards";
import { getOrdersHistory, resetOrdersHistory } from "../../store/slices/cart";
import Alert from "../../components/alert/Alert";
import { useEffect, useState } from "react";

const History = () => {
    const dispatch = useAppDispatch();
    const userOrders = useAppSelector(store => store.cart.userOrders);
    const userOrdersError = useAppSelector(store => store.cart.userOrdersError);
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address"),
    });

    useEffect(() => {
        dispatch(resetOrdersHistory());
    }, []);

    useEffect(() => {
        userOrdersError ? setAlertIsOpen(true) : setAlertIsOpen(false);
    }, [userOrdersError]);

    return (
        <section className='history'>
            <div className='history__form'>
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        dispatch(getOrdersHistory({ email: values.email }));
                    }}
                >
                    {({ isValid }) => (
                        <Form>
                            <TextInput type='text' name='email' label='Email' variant='outlined' fullWidth />
                        </Form>
                    )}
                </Formik>
            </div>
            <div className='history__orders'>
                <ul className='orders-list'>
                    {userOrders && userOrders.length > 0 ? (
                        userOrders.map((order: any) => {
                            return (
                                <li key={order._id} className='orders'>
                                    <div className='orders__cards'>
                                        <Cards cards={order.items} />
                                    </div>
                                    <div className='orders__total'>Total price: {order.totalPrice} грн. </div>
                                </li>
                            );
                        })
                    ) : (
                        <h3 className="noOrdersFound">No orders found</h3>
                    )}
                </ul>
            </div>
            <Alert
                open={alertIsOpen}
                message={userOrdersError}
                severity='error'
                onClose={() => setAlertIsOpen(false)}
            />
        </section>
    );
};

export default History;
