import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setLoader } from "../../Redux/loaderSlice";
import MovieTvService from "../../Services/MovieTvService";

import './card-details.scss';

interface IDetails {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  id: number;
  in_production: boolean;
  last_air_date: string;
  name: string;
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;

  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
}

const imagePath: string = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;
// const 

const CardDetails: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useDispatch();

  const { tvShowsButton } = useSelector((state: any) => state.buttonsStore);
  const { movieButton } = useSelector((state: any) => state.buttonsStore);

  const [details, setDetails] =  useState<IDetails | null>(null);
  const [errMsg, setErrMsg] = useState<string>("")

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    // console.log(id);
    if (tvShowsButton){
      return tvShowsDetails();
    }
    if(movieButton){
      return movieDetails();
    }
  };

  const tvShowsDetails = (): void => {
    dispatch(setLoader(true));
    MovieTvService.getTvShowDetails(id)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        err.message && setErrMsg(err.message);
      })
      .finally(() => dispatch(setLoader(false)));
  }

  const movieDetails = (): void => {
    dispatch(setLoader(true));
    MovieTvService.getMovieDetails(id)
                  .then((res) => {
                    console.log(res.data);
                    setDetails(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                    err.message && setErrMsg(err.message);
                  })
                  .finally(() => dispatch(setLoader(false)));
  }

  return (
    <div className="card-details" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${imagePath + details?.backdrop_path})`}}>

      <div className="card-details-image">
        {
          details?.poster_path ?
          <img src={`${imagePath + details?.poster_path}`} alt={details?.name} />
          :
          <img src={`${imagePath + details?.backdrop_path}`} alt={details?.name} />
        }
      </div>

      <div className="card-details-info">
        <div className="card-details-title">
          <h2>{details?.name || details?.original_title}</h2>
        </div>

        {/* {
          details?.imdb_id &&
          <video width="400" controls>
            <source src="https://www.youtube.com/watch?v=kQEtor8MvqI&t=128s&ab_channel=CroatiaRecords" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        } */}

        <div className="card-details-overview">
          <p>{details?.overview}</p>
        </div>
      </div>


      {
        errMsg &&
        <div className="card-details-err">
          <p>Sorry, we did not find any details for the selected TV show / movie!</p>
        </div>
      }
    </div>

  )
}

export default CardDetails;
