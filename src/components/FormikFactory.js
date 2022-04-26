import React from 'react';
import { Formik, Form } from 'formik';
import RouteFactory from '../components/RouteFactory';
import { initialValues } from '../utils/helper';

const FormikFactory = () => (
  <Formik
    initialValues={initialValues}
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
