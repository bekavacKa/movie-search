import renderer from 'react-test-renderer';
import Loader from '../../Components/Loader/Loader';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('Snapshot test', () => {
    const initialState = { 
        loaderStore: false,
    };
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);
    const tree = renderer.create(
        <Provider store={store}>
                <Loader />
        </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});