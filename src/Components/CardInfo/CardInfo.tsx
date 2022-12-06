import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
const noImage: string = `https://static8.depositphotos.com/1009634/988/v/600/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg`;

const CardInfo : FC<Props> = ({name, vote_average, title, backdrop_path, poster_path, id}) => {

  const handleAverage = () => {
    if(vote_average){
      if(4.5 > vote_average){
        return "bad-av"
      }
      if(7.5 > vote_average){
        return "good-av"
      }
      if(10 > vote_average){
        return "super-av"
      }
    }
  }

  return (
  <>
      {/* {console.log(id , " => ", name, " => ",  title)} */}
    <Link to={`/details/${id}`} className='card-info'>
        <div className='card-info-image'>
          {
            !poster_path  ?
            <img src={`${noImage}`} alt={name || title} />
            :
            <img src={`${imagePath + poster_path}`} alt={name || title} />
            
          }
        </div>
        
        <div className='card-info-more'>
          {
            vote_average ? 
            <div className={`card-info-more-average ${handleAverage()}`}>
              <span>
                {vote_average}
              </span>
            </div>
            :
            null
          }
          <h2 className='card-info-more-title'>{name || title}</h2> 
        </div>
        
    </Link>
  </>
  )
}

export default CardInfo