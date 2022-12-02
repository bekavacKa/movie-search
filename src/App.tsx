import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import routes from './Config/routes';
import Home from './Pages/Home/Home';
import MovieTvShowDetails from './Pages/MovieTvShowDetails/MovieTvShowDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.HOME.url} element={<Home />} />
        <Route path={routes.DETAILS.url} element={<MovieTvShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
