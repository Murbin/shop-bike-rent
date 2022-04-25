import React, { useEffect } from 'react';
import { incrementAsync } from '../features/shopBikeState/apis/listBikes';
import Layout from '../components/layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectBikes } from '../features/shopBikeState/shopBikeSlice';
import GroupCards from '../components/groupCard';

const Catalogue = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(selectBikes);

  useEffect(() => {
    dispatch(incrementAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Layout showNavbar showFilter>
      <GroupCards bikes={bikes} />
    </Layout>
  );
};

export default Catalogue;
