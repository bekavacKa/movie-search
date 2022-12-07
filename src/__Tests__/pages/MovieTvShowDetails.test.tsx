import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import MovieTvShowDetails from '../../Pages/MovieTvShowDetails/MovieTvShowDetails';
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
        <Router>
            <MovieTvShowDetails />
        </Router>
    </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
