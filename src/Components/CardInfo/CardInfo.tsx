import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes';
import './card-info.scss';

interface Props {
  backdrop_path?: string;
  first_air_date?: string;
  id?: number;
  name?: string;
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;

  adult?: boolean;
  original_title?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
}

const CardInfo : FC<Props> = ({name, vote_average, title}) => {

  return (
    <Link to={routes.DETAILS.url} className='card-info'>
        <div className='card-info-image'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg' alt='bla' />
        </div>
        {vote_average}
        <div className='card-info-title'>
            <h2>{name || title}</h2>        
        </div>
    </Link>
  )
}

export default CardInfo