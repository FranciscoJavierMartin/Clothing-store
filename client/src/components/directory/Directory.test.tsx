import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { sections } from '../../data/directory.data';
import Directory from './Directory';
import { findByTestAttr, Wrapper } from '../../../test/testUtils';
import MenuItem from '../menu-item/MenuItem';

/**
 * Setup function for app component.
 * @returns { Wrapper }
 */
function setup(): Wrapper{
  return shallow(<Directory/>);
}

describe('Directory component', () => {
  let component: Wrapper;

  beforeEach(() => {
    component = findByTestAttr(setup(), 'directory-component');
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });
  
  test('have multiple children', () => {
    expect(component.children().length).toBe(sections.length);
  });

  // TODO: Fix this test
  xtest("children are 'MenuItem'", () => {
    expect(component.childAt(0)).toEqual(<MenuItem title={sections[0].title} imageUrl={sections[0].imageUrl} linkUrl={sections[0].linkUrl}/>);
  });
});
