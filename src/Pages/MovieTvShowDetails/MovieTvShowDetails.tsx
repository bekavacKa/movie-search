import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import './movie-tv-show-details.scss';
import routes from '../../Config/routes';
import CardDetails from '../../Components/CardDetails/CardDetails';

function MovieTvShowDetails() {
  return (
    <div className='movie-tv-show-details'>

        <Link to={routes.HOME.url} className='details-back'>
            <FaAngleLeft className='details-back-icon'/> 
            <span className='details-back-span'> BACK </span>
        </Link>

        <div className='details-content'>
          <CardDetails />
        </div>

    </div>
  )
}

export default MovieTvShowDetails