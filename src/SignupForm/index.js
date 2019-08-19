import React, {Component} from 'react';
import { Formik } from 'formik';
import { schema } from './schema';

import {Form, FormLayout, TextField, Button} from '@shopify/polaris';

class SignupForm extends Component{
    renderForm = (props)=>{
        const {handleSubmit, handleBlur, isValid, touched, values, errors, setFieldValue } = props;

        return (
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        value={values.name}
                        onChange={value=>{setFieldValue("name", value)}}
                        label="Name"
                        type="name"
                        name="name"
                        onBlur={handleBlur}
                        error={touched.name && errors.name}
                    />
                     <TextField
                        value={values.age}
                        onChange={value=>{setFieldValue("age", value)}}
                        label="Edad"
                        type="number"
                        name="age"
                        onBlur={handleBlur}
                        error={touched.age && errors.age}
                    />
                    <TextField
                        value={values.email}
                        onChange={value=>{setFieldValue("email", value)}}
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                    />
            
                    <Button disabled={!isValid} submit>Submit</Button>
                </FormLayout>
            </Form>
        )
    }

    submitForm = (values, props)=>{
        console.log(values)
    }

    render(){
        return (
            <Formik
                initialValues={{
                    name: "",
                    age: null,
                    email: ""
                }}
                render={this.renderForm}
                onSubmit={this.submitForm}
                validationSchema={schema}
            />
        )
    }


}

export default SignupForm;