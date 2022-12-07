import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('Snapshot test', () => {
  render(<App />);
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
