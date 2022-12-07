import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../Config/routes';
import './error.scss';

function Error() {
  return (
    <div className='error'>
        <h2>
            ERROR 
        </h2>
        <p>
            We can't find the page, or it doesn't exist !
        </p>
        <Link to={routes.HOME.url}>
            <button className='error-btn'>Back to {routes.HOME.name}</button>
        </Link>
    </div>
  )
}

export default Error