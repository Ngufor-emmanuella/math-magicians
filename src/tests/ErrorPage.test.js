import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../components/ErrorPage';

test('should match the snapshot', () => {
  const makeNew = renderer.create(<NotFoundPage />);
  const tree = makeNew.toJSON();
  expect(tree).toMatchSnapshot();
});
