import React from 'react';
import { useSelector } from 'react-redux';
import './loader.scss';

function Loader() {


  const { loading } = useSelector((state: any) => state.loaderStore);

  return (
    <>
        {
            loading &&
            <div className='loader'>
                <div className='loader-shape'></div>
            </div>
        }
    </>
  )
}

export default Loader