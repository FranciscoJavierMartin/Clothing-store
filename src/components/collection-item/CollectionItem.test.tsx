import React from 'react';
import { Wrapper } from '../../../test/testUtils';
import CollectionItem from './CollectionItem';
import { shallow } from 'enzyme';

/**
 * Setup function for app component.
 * @returns { Wrapper }
 */
function setup(id: number = 0, name: string = '', price: number = 0, imageUrl: string = ''): Wrapper{
  return shallow(<CollectionItem {... {id, name, price, imageUrl}}/>);
}

describe('test CollectionItem Component', () => {
  let component: Wrapper;

  beforeEach(() => {
    component = setup();
  });

  test('render without crashed', () => {
    expect(component.length).toBe(1);
  })
});