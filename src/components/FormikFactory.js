import React from 'react';
import { Formik, Form } from 'formik';
import RouteFactory from '../components/RouteFactory';

const FormikFactory = () => (
  <Formik
    initialValues={{
      username: '',
      type: '',
      days: undefined,
      bike: undefined,
      price: undefined,
      image: undefined
    }}
    onSubmit={({ setSubmitting }) => {
      setSubmitting(false);
    }}
  >
    {(props) => {
      return (
        <Form>
          <RouteFactory {...props} />
        </Form>
      );
    }}
  </Formik>
);

export default FormikFactory;
