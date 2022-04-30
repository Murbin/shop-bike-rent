import { lazy } from 'react';
import * as ROUTES from '../utils/urls';
import { validateEmpty, types, maxDays } from '../utils/helper';
import {
  selectName,
  selectType,
  selectDaysRent,
  selectImage,
  selectBicycles,
  updateImage,
  updateValueInput,
  updateAmount
} from '../features/shopBicycleState/shopBicycleSlice';

const Home = lazy(() => import('../pages/Home'));
const Catalogue = lazy(() => import('../pages/Catalogue'));
const Input = lazy(() => import('./Input'));
const Select = lazy(() => import('./Select'));
const Image = lazy(() => import('./Image'));
const Invoice = lazy(() => import('../pages/Invoice'));
const History = lazy(() => import('../pages/History'));
const GroupCardByType = lazy(() => import('./GroupCardByType'));

export const pages = {
  content: {
    body: [
      {
        _uid: '0',
        component: Home,
        path: ROUTES.HOME
      },
      {
        _uid: '1',
        component: Catalogue,
        path: ROUTES.CATALOGUE
      },
      {
        _uid: '2',
        component: Input,
        path: ROUTES.RENT_FORM,
        name: 'username',
        getData: selectName,
        saveData: updateValueInput,
        previous: ROUTES.HOME,
        next: ROUTES.TYPE_BICYCLE,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: validateEmpty
      },
      {
        _uid: '3',
        component: Select,
        path: ROUTES.TYPE_BICYCLE,
        name: 'type',
        getData: selectType,
        saveData: updateValueInput,
        previous: ROUTES.RENT_FORM,
        next: ROUTES.DAYS_RENT,
        type: 'select',
        validate: validateEmpty,
        options: types,
        items: [{ id: 1, section: 'type', label: 'Type' }]
      },
      {
        _uid: '4',
        component: Select,
        path: ROUTES.DAYS_RENT,
        name: 'days',
        getData: selectDaysRent,
        saveData: updateValueInput,
        previous: ROUTES.TYPE_BICYCLE,
        next: ROUTES.BICYCLE_RENT,
        type: 'select',
        validate: validateEmpty,
        options: maxDays,
        items: [{ id: 1, section: 'days', label: 'Days' }]
      },
      {
        _uid: '5',
        component: GroupCardByType,
        path: ROUTES.BICYCLE_RENT,
        name: 'amountRent',
        getData: selectBicycles,
        saveData: updateAmount,
        previous: ROUTES.DAYS_RENT,
        next: ROUTES.PAYMENT_RENT,
        validate: validateEmpty
      },
      {
        _uid: '6',
        component: Image,
        path: ROUTES.PAYMENT_RENT,
        name: 'image',
        getData: selectImage,
        saveData: updateImage,
        previous: ROUTES.BICYCLE_RENT,
        next: ROUTES.RESUME,
        type: 'file'
      },
      {
        _uid: '7',
        component: Invoice,
        path: ROUTES.RESUME,
        previous: ROUTES.PAYMENT_RENT,
        next: ROUTES.HISTORY_RENT
      },
      {
        _uid: '8',
        component: History,
        path: ROUTES.HISTORY_RENT
      }
    ]
  }
};
