import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import HomePage from './HomePage';
import { findByTestAttr } from '../../../test/testUtils';

/**
 * Setup function for app component.
 * @returns { ShallowWrapper }
 */
function setup(): ShallowWrapper {
  return shallow(<HomePage />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'home-component');
  expect(component.length).toBe(1);
});