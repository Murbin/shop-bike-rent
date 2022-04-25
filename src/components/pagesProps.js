import * as ROUTES from '../utils/urls';
import Home from '../pages/home';
import Catalogue from '../pages/catalogue';
import Input from '../components/input';
import {
  selectName,
  updateValueInput
} from '../features/shopBikeState/shopBikeSlice';

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
      //Form new rent
      {
        _uid: '2',
        component: Input,
        path: ROUTES.RENT_FORM,
        name: 'username',
        getData: selectName,
        saveData: updateValueInput,
        previous: ROUTES.HOME,
        next: ROUTES.EMAIL_FORM,
        placeholder: 'Adams Smith',
        type: 'text',
        // validate: validateEmpty,
        description: 'REQUESTS THE NAME OF THE USER WHO RENT A BIKE'
      }
    ]
  }
};
