import React from 'react';
import { getBicyclesByType } from '../features/shopBicycleState/apis/listBicycles';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RowFilter, ColFilter, FormSelect } from '../assets/styles';

const Filter = () => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const type = e.target.value;
    dispatch(getBicyclesByType(type));
  };

  return (
    <RowFilter>
      <ColFilter md={12}>
        <FormSelect
          aria-label={t('aria-label')}
          onChange={(e) => handleFilter(e)}
        >
          <option value="all">{t('all')}</option>
          <option value="electrics">{t('electrics')}</option>
          <option value="old">{t('old')}</option>
          <option value="normal">{t('normal')}</option>
        </FormSelect>
      </ColFilter>
    </RowFilter>
  );
};

export default Filter;
