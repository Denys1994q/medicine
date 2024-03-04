import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import * as Yup from "yup";

const UserForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        address: Yup.string().required("Address is required"),
    });

    return (
        <div>
            <Typography variant="h2" sx={{marginBottom: '10px'}}>User Form</Typography>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
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
                                    sx: { fontSize: "14px" },
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: "14px" },
                                }}
                            />
                            <Box sx={{ padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='name' component='div' />
                            </Box>
                            <Field
                                as={TextField}
                                type='email'
                                name='email'
                                label='Email'
                                variant='outlined'
                                InputProps={{
                                    sx: { fontSize: "14px" },
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: "14px" },
                                }}
                                fullWidth
                            />
                            <Box sx={{ padding: "5px", lineHeight: 1, color: "red" }}>
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
                                    sx: { fontSize: "14px" },
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: "14px" },
                                }}
                            />
                            <Box sx={{ padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='phone' component='div' />
                            </Box>
                            <Field
                                as={TextField}
                                type='text'
                                name='address'
                                label='Address'
                                variant='outlined'
                                fullWidth
                                InputProps={{
                                    sx: { fontSize: "14px" },
                                }}
                                InputLabelProps={{
                                    sx: { fontSize: "14px" },
                                }}
                                multiline
                            />
                            <Box sx={{ padding: "5px", lineHeight: 1, color: "red" }}>
                                <ErrorMessage name='address' component='div' />
                            </Box>
                        </Box>
                        <Button type='submit' disabled={!isValid} sx={{ fontSize: "14px" }} variant='contained' color='primary'>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;
