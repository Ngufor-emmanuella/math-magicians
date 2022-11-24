import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../components/calculator';

test('should match the snapshot', () => {
  const calc = renderer.create(<Calc />);
  const tree = calc.toJSON();
  expect(tree).toMatchSnapshot();
});
