import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Setup function for app component.
 * @returns { ShallowWrapper }
 */
function setup(): ShallowWrapper {
  return shallow(<App />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
