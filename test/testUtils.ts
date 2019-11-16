import { ShallowWrapper } from 'enzyme';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param val - Value of data-tet attribute for search.
 * @returns {ShallowWrapper}
 */
export function findByTestAttr(
  wrapper: ShallowWrapper,
  val: string
): ShallowWrapper {
  return wrapper.find(`[data-test="${val}"]`);
}
