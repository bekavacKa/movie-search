import React from 'react';
import './home.scss';

function Home() {
  return (
    <div className='home'>
      <h2>Find your favorite movies or TV shows</h2>
      <input type="search" placeholder='Search . . .' className='home-search'/>
      <div className='home-btns'>
        <button className='btn movie'> movies </button>
        <button className='btn tv'> TV Shows </button>
      </div>
    </div>
  )
}

export default Home