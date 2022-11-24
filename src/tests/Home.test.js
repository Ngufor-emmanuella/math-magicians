import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('should match the snapshot', () => {
  const home = renderer.create(<Home />);
  const tree = home.toJSON();
  expect(tree).toMatchSnapshot();
});
