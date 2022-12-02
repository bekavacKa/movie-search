import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes';
import './card-info.scss';

function CardInfo() {


  return (
    <Link to={routes.DETAILS.url} className='card-info'>
        <div className='card-info-image'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg' alt='bla' />
        </div>
        <div className='card-info-title'>
            <h2>seven</h2>        
        </div>
    </Link>
  )
}

export default CardInfo