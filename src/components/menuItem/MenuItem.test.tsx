import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import MenuItem from './MenuItem';
import { findByTestAttr } from '../../../test/testUtils';

const IMAGE_URL = 'https://i.ibb.co/cvpntL1/hats.png';
const TEST_TITLE = 'testTitle';

/**
 * Setup function for app component.
 * @returns { ShallowWrapper }
 */
function setup(
  title: string = TEST_TITLE,
  imageUrl: string = 'https://i.ibb.co/cvpntL1/hats.png',
  size?: string
): ShallowWrapper {
  return shallow(<MenuItem title={title} imageUrl={imageUrl} size={size} />);
}

describe('Menu item', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = findByTestAttr(setup(), 'container');
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  test('imageUrl is the same that background', () => {
    const image = findByTestAttr(component, 'image');
    expect(image.prop('style')).toHaveProperty('backgroundImage', `url(${IMAGE_URL})`);
  });

  test('title is upper case', () => {
    const title = findByTestAttr(component, 'title');
    expect(title.text()).toEqual(TEST_TITLE.toUpperCase());
  });
});
