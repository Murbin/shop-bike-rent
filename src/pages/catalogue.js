import React, { useEffect } from 'react';
import { incrementAsync } from '../features/shopBicycleState/apis/listBicycles';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectBicycles } from '../features/shopBicycleState/shopBicycleSlice';
import GroupCards from '../components/GroupCard';

const Catalogue = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector(selectBicycles);

  useEffect(() => {
    dispatch(incrementAsync());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <GroupCards bicycles={bicycles} />
    </>
  );
};

export default Catalogue;
