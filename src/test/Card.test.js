import React from 'react';
import Card from '../components/Card';

describe('Testing in <Card /> component', () => {
  let wrapper;

  const bicycle = {
    title: 'Electrical',
    price: 50,
    image: 'bicycle.png'
  };

  beforeEach(() => {
    wrapper = global.mount(<Card bicycle={bicycle} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('change the default price of field for biclycle', () => {
    expect(wrapper.find('div').first().text()).toMatch(/50,00/);
  });

  it('change the default src image of field for biclycle', () => {
    expect(wrapper.find('img').prop('src')).toBe('bicycle.png');
  });
});
