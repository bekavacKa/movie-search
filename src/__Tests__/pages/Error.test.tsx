import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Error from '../../Pages/Error/Error';

test('Snapshot test', () => {
  const tree = renderer.create(
    <Router >
            <Error />
        </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
