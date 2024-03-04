import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box } from "@mui/material";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
}

const UserForm = () => {
    const initialValues: FormValues = {
        name: "",
        email: "",
        phone: "",
        address: "",
    };

    return (
        <div>
            <h1>User Form</h1>
            <Formik
                initialValues={initialValues}
                validateOnMount={true}
                validate={values => {
                    const errors: Partial<FormValues> = {};
                    if (!values.name) {
                        errors.name = "Required";
                    }
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                    }
                    if (!values.phone) {
                        errors.phone = "Required";
                    }
                    if (!values.address) {
                        errors.address = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values): any => {
                    console.log(values);
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <Box>
                            <Field
                                as={TextField}
                                type='text'
                                name='name'
                                label='Name'
                                variant='outlined'
                                fullWidth
                                InputProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                required
                            />
                            <Box sx={{  padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='name' />
                            </Box>
                            <Field
                                as={TextField}
                                type='email'
                                name='email'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                InputProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                required
                            />
                            <Box sx={{  padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='email' component='div' />
                            </Box>
                            <Field
                                as={TextField}
                                type='text'
                                name='phone'
                                label='Phone'
                                variant='outlined'
                                fullWidth
                                InputProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                required
                            />
                            <Box sx={{  padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='phone' component='div' />
                            </Box>
                            <Field
                                as={TextField}
                                type='text'
                                name='address'
                                label='Address'
                                variant='outlined'
                                fullWidth
                                multiline
                                InputProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: '14px' }
                                }}
                                required
                            />
                            <Box sx={{  padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='address' component='div' />
                            </Box>
                        </Box>
                        <Button
                            type='submit'
                            disabled={!isValid}
                            variant='contained'
                            sx={{ fontSize: "14px" }}
                            color='primary'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;
