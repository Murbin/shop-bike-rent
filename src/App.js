import React, { Suspense } from 'react';
import Loader from '../src/components/Loader';
import FormikFactory from '../src/components/FormikFactory';
import Layout from '../src/components/Layout';

const App = () => (
  <Layout>
    <Suspense
      fallback={<Loader animation="grow" size={'xl'} variant="primary" />}
    >
      <FormikFactory />
    </Suspense>
  </Layout>
);

export default App;
