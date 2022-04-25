import * as ROUTES from '../utils/urls';
import Home from '../pages/home';
import Catalogue from '../pages/catalogue';
import Rent from '../pages/rent';

export const PagesProps = {
  content: {
    body: [
      {
        _uid: '0',
        component: Home,
        path: ROUTES.HOME,
        name: 'home',
        getData: undefined,
        saveData: undefined,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: undefined,
        description: 'Home'
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
        description: 'Catalogue'
      },
      {
        _uid: '2',
        component: Rent,
        path: ROUTES.RENT,
        name: 'Catalogue',
        getData: undefined,
        saveData: undefined,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: undefined,
        description: 'Catalogue'
      }
    ]
  }
};
