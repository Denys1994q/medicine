import "./History.sass";
import TextInput from "../../components/inputs/text-input/Text-input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useAppSelector } from "../../store/hooks";
import Cards from "../../components/cards/Cards";

const History = () => {
    const cartProds = useAppSelector(store => store.cart.products);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address"),
    });

    return (
        <section className='history'>
            <div className='history__form'>
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        console.log(values);
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
                <ul className="orders-list">
                    <li className="orders">
                        <div className='orders__cards'>
                            <Cards cards={cartProds} />
                        </div>
                        <div className='orders__total'>Total price: 900 грн. </div>
                    </li>
                    <li className="orders">
                        <div className='orders__cards'>
                            <Cards cards={cartProds} />
                        </div>
                        <div className='orders__total'>Total price: 900 грн. </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default History;
