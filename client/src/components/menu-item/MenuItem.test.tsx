import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactWrapper, mount } from 'enzyme';
import MenuItem from './MenuItem';
import { findByTestAttr, Wrapper } from '../../../test/testUtils';

const IMAGE_URL = 'https://i.ibb.co/cvpntL1/hats.png';
const TEST_TITLE = 'testTitle';

/**
 * Setup function for app component.
 * @returns { ReactWrapper }
 */
function setup(
  title: string = TEST_TITLE,
  imageUrl: string = 'https://i.ibb.co/cvpntL1/hats.png',
  linkUrl: string = '',
  size?: string
): ReactWrapper {
  return mount(
    <MemoryRouter>
      <MenuItem
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    </MemoryRouter>
  );
}

describe('Menu item', () => {
  let component: Wrapper;

  beforeEach(() => {
    component = findByTestAttr(setup(), 'container');
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  test('imageUrl is the same that background', () => {
    const image = findByTestAttr(component, 'image');
    expect(image.prop('style')).toHaveProperty(
      'backgroundImage',
      `url(${IMAGE_URL})`
    );
  });

  test('title is upper case', () => {
    const title = findByTestAttr(component, 'title');
    expect(title.text()).toEqual(TEST_TITLE.toUpperCase());
  });
});
