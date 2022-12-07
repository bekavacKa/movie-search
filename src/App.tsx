import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import Loader from './Components/Loader/Loader';
import routes from './Config/routes';
import Home from './Pages/Home/Home';
import MovieTvShowDetails from './Pages/MovieTvShowDetails/MovieTvShowDetails';
import { store } from './Redux/store';
import Error from './Pages/Error/Error';

function App() {

  return (
    <div className="App">
      <Provider store={store} >
        <Loader />

        <BrowserRouter>
          <Routes>
            <Route path={routes.HOME.url} element={<Home />} />
            <Route path={routes.DETAILS.url} element={<MovieTvShowDetails />} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </BrowserRouter>
        
      </Provider>
    </div>
  );
}

export default App;
