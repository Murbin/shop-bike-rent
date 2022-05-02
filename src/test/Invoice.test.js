import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../app/store';
import Invoice from '../pages/Invoice';

//describe run various test
describe('Testing setup config of redux, and router to all project', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Invoice />
        </Router>
      </Provider>
    );
  });
  it('Should render without crash', () => {
    expect(wrapper.find(Invoice).length).toBe(1);
  });
});
