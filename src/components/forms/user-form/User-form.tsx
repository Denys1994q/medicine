import { Formik, Form } from "formik";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import TextInput from "../../inputs/text-input/Text-input";

const UserForm = ({handleFormChanges}: any) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        address: Yup.string().required("Address is required"),
    });

    const onFormChanges = (isValid: any) => {
        handleFormChanges(isValid)
    }

    return (
        <div>
            <Typography variant='h2' sx={{ marginBottom: "30px" }}>
                User Form
            </Typography>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={validationSchema}
                validateOnMount={true}
                validateOnChange={true}
                onSubmit={values => {
                    console.log(values);
                }}
                validate={(values) => {
                    const errors = {};
                    validationSchema
                        .validate(values, { abortEarly: false })
                        .then(() => {
                            onFormChanges(values); 
                            // console.log(values)
                        })
                        .catch((validationErrors) => {
                            onFormChanges(null); 
                        })
                    return errors;
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <TextInput type='text' name='name' label='Name' />
                        <TextInput type='email' name='email' label='Email' />
                        <TextInput type='text' name='phone' label='Phone' />
                        <TextInput type='text' name='address' label='Address' multiline />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;
