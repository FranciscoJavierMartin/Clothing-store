import { ShallowWrapper, ReactWrapper } from 'enzyme';

export type Wrapper = ShallowWrapper | ReactWrapper;

/**
 * Return node(s) with the given data-test attribute.
 * @param {Wrapper} wrapper - Enzyme shallow wrapper.
 * @param val - Value of data-tet attribute for search.
 * @returns {Wrapper}
 */
export function findByTestAttr(
  wrapper: Wrapper,
  val: string
): Wrapper {
  return wrapper.find(`[data-test="${val}"]`);
}
