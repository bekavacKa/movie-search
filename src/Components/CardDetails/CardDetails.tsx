import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setLoader } from "../../Redux/loaderSlice";
import MovieTvService from "../../Services/MovieTvService";

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
}

const CardDetails: FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useDispatch();

  const [details, setDetails] =  useState<IDetails | null>(null);
  const [errMsg, setErrMsg] = useState<string>("")

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    dispatch(setLoader(true));
    MovieTvService.getTvShowDetails(id)
      .then((res) => {
        console.log("ja",res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
        err.message && setErrMsg(err.message);
      })
      .finally(() => dispatch(setLoader(false)));
  };

  return (
    <div className="card-details">
      {details?.name}

      {
        errMsg &&
        <div className="card-details-err">
          <h2>{errMsg}</h2>
        </div>
      }
    </div>

  )
}

export default CardDetails;
