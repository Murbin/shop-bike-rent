import * as ROUTES from '../utils/urls';
import Home from '../pages/home';
import Catalogue from '../pages/catalogue';
import Input from './input';
import Select from './select';
import Image from './image';
import {
  selectName,
  selectType,
  selectDaysRent,
  selectImage,
  selectBikes,
  updateImage,
  updateValueInput
} from '../features/shopBikeState/shopBikeSlice';
import { validateEmpty, types, maxDays } from '../utils/helper';
import GroupCardByType from './groupCardByType';
import Invoice from '../pages/invoice';
import History from '../pages/history';

export const Pages = {
  content: {
    body: [
      {
        _uid: '0',
        component: Home,
        path: ROUTES.HOME,
        name: undefined,
        getData: undefined,
        saveData: undefined,
        placeholder: undefined,
        type: undefined,
        validate: undefined,
        description: 'Page Home'
      },
      {
        _uid: '1',
        component: Catalogue,
        path: ROUTES.CATALOGUE,
        name: 'Catalogue',
        getData: undefined,
        saveData: undefined,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: undefined,
        description: 'Page Catalogue'
      },
      {
        _uid: '2',
        component: Input,
        path: ROUTES.RENT_FORM,
        name: 'username',
        getData: selectName,
        saveData: updateValueInput,
        previous: ROUTES.HOME,
        next: ROUTES.TYPE_BIKE,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: validateEmpty,
        description: 'RENT FORM REQUESTS THE NAME OF THE USER WHO RENT A BIKE'
      },
      {
        _uid: '3',
        component: Select,
        path: ROUTES.TYPE_BIKE,
        name: 'type',
        getData: selectType,
        saveData: updateValueInput,
        previous: ROUTES.RENT_FORM,
        next: ROUTES.DAYS_RENT,
        placeholder: undefined,
        type: 'select',
        validate: validateEmpty,
        options: types,
        choice: null,
        description: 'REQUESTS TYPE OF RENT',
        subItem: false,
        items: [{ id: 1, section: 'type', label: 'Type', childName: '' }]
      },
      {
        _uid: '4',
        component: Select,
        path: ROUTES.DAYS_RENT,
        name: 'days',
        getData: selectDaysRent,
        saveData: updateValueInput,
        previous: ROUTES.TYPE_BIKE,
        next: ROUTES.BIKE_RENT,
        placeholder: undefined,
        type: 'select',
        validate: validateEmpty,
        options: maxDays,
        choice: null,
        description: 'REQUESTS DAYS OF RENT',
        subItem: false,
        items: [{ id: 1, section: 'days', label: 'Days', childName: '' }]
      },
      {
        _uid: '5',
        component: GroupCardByType,
        path: ROUTES.BIKE_RENT,
        name: 'amountRent',
        getData: selectBikes,
        saveData: undefined,
        previous: ROUTES.DAYS_RENT,
        next: ROUTES.PAYMENT_RENT,
        placeholder: undefined,
        type: undefined,
        validate: validateEmpty,
        options: undefined,
        choice: undefined,
        description: 'SELECT A BIKE',
        subItem: false,
        items: undefined,
        bikes: selectBikes
      },
      {
        _uid: '6',
        component: Image,
        path: ROUTES.PAYMENT_RENT,
        name: 'image',
        getData: selectImage,
        saveData: updateImage,
        child: undefined,
        previous: ROUTES.BIKE_RENT,
        next: ROUTES.RESUME,
        placeholder: 'Click to load a payment bauch',
        type: 'file',
        validate: undefined,
        options: undefined,
        choice: undefined,
        description: 'REQUESTS THE IMAGE OF THE PAYMENT',
        subItem: undefined,
        items: undefined
      },
      {
        _uid: '7',
        component: Invoice,
        path: ROUTES.RESUME,
        name: 'Invoice Resume',
        getData: undefined,
        saveData: undefined,
        previous: ROUTES.PAYMENT_RENT,
        next: ROUTES.HOME,
        placeholder: undefined,
        type: undefined,
        validate: undefined,
        options: undefined,
        choice: undefined,
        description: 'RESUME INVOICE',
        subItem: false,
        items: undefined
      },
      {
        _uid: '8',
        component: History,
        path: ROUTES.HISTORY_RENT,
        name: 'history',
        getData: undefined,
        saveData: undefined,
        previous: undefined,
        next: undefined,
        placeholder: undefined,
        type: undefined,
        validate: undefined,
        options: undefined,
        choice: undefined,
        description: 'HISTORY RENTS',
        subItem: false,
        items: undefined
      }
    ]
  }
};
