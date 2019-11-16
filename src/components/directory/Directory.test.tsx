import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { sections } from '../../data/directory.data';
import Directory from './Directory';
import { findByTestAttr } from '../../../test/testUtils';
import MenuItem from '../menuItem/MenuItem';

/**
 * Setup function for app component.
 * @returns { ShallowWrapper }
 */
function setup(): ShallowWrapper{
  return shallow(<Directory/>);
}

describe('Directory component', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = findByTestAttr(setup(), 'directory-component');
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });
  
  test('have multiple children', () => {
    expect(component.children().length).toBe(sections.length);
  });

  xtest("children are 'MenuItem'", () => {
    expect(component.childAt(0)).toEqual(<MenuItem title={sections[0].title} imageUrl={sections[0].imageUrl}/>);
  });
});
