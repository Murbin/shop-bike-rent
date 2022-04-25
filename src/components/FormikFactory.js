import React from 'react';
import { Formik, Form } from 'formik';
import RouteFactory from '../components/RouteFactory';

const FormikFactory = () => (
  <Formik
    initialValues={{
      username: '',
      email: '',
      floor: undefined,
      zone: {
        bbq: false,
        comunal: false,
        entertaiment: false
      },
      parking: {
        has: '',
        covered: 'No'
      },
      price: undefined,
      image: undefined,
      hasElevator: undefined
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
