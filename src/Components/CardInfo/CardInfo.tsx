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

const imagePath: string = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

const CardInfo : FC<Props> = ({name, vote_average, title, backdrop_path, poster_path, id}) => {

  return (
    <Link to={`/details/${id}`} className='card-info'>
        <div className='card-info-image'>
            <img src={`${imagePath + poster_path}`} alt={name || title} />
        </div>
        {vote_average}
        <div className='card-info-title'>
            <h2>{name || title}</h2>        
        </div>
    </Link>
  )
}

export default CardInfo