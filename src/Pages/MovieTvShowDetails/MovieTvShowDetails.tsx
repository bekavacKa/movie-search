import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import './movie-tv-show-details.scss';
import routes from '../../Config/routes';

function MovieTvShowDetails() {
  return (
    <div className='movie-tv-show-details'>

        <Link to={routes.HOME.url} className='details-back'>
            <FaAngleLeft className='details-back-icon'/> 
            <span className='details-back-span'> BACK </span>
        </Link>

        <div className='details-image'>
            <img src='https://live.staticflickr.com/4005/4686746190_31c292dc8c_b.jpg' alt='slika' />
        </div>

        <div className='details-title'>
            <h2>
                MovieTvShowDetails
            </h2>
        </div>

        <div className='details-description'>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>

    </div>
  )
}

export default MovieTvShowDetails