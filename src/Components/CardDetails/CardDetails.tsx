import React, { FC, useEffect, useState } from "react";
import { FaFilm, FaImdb } from "react-icons/fa";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // console.log(res.data);
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
                    // console.log(res.data);
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


      {
        details?.homepage ?
        <div className="card-details-image">
        {
          details?.poster_path ?
          <a className="image-homepage" href={details?.homepage} target="_blank" rel="noopener noreferrer">
            <img src={`${imagePath + details?.poster_path}`} alt={details?.name} />
          </a>
          :
          <a className="image-homepage" href={details?.homepage} target="_blank" rel="noopener noreferrer">
            <img src={`${imagePath + details?.backdrop_path}`} alt={details?.name} />
          </a>
        }
        </div>
        :
        <div className="card-details-image">
          {
            details?.poster_path ?
            <img src={`${imagePath + details?.poster_path}`} alt={details?.name} />
            :
            <img src={`${imagePath + details?.backdrop_path}`} alt={details?.name} />
          }
        </div>
      }

      <div className="card-details-info">
        <div className="card-details-title">
          <h2>{details?.name || details?.original_title}</h2>
          {
            details?.imdb_id &&
            <a className="title-icon" href={`https://www.imdb.com/title/${details?.imdb_id}/?ref_=vp_vi_tt`} target="_blank" rel="noopener noreferrer">
              <FaImdb className="imdb" />
            </a>
          }
        </div>

        {
          details?.imdb_id &&
          <a className="card-details-video" href={`https://www.imdb.com/video/vi1348706585/?playlistId=${details?.imdb_id}&ref_=tt_ov_vi`} target="_blank" rel="noopener noreferrer">
            <FaFilm className="video-icon" />
            <p>thriller</p>
          </a>
        }

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
