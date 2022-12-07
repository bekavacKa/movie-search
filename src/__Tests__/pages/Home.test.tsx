import renderer from 'react-test-renderer';
import Home from '../../Pages/Home/Home';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('Snapshot test', () => {
    const initialState = { 
        searchTermStore: '',
        buttonsStore:{
            tvShowsButton: true,
            movieButton: false
        },
        storeSearchTerm: ""
    };
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);
    const tree = renderer.create(
        <Provider store={store}>
            <Home />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
