import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

test('should match the snapshot', () => {
  const quote = renderer.create(<Quotes />);
  const tree = quote.toJSON();
  expect(tree).toMatchSnapshot();
});
