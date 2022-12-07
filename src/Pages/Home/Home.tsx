import React, { useEffect, useState } from "react";
import  debounce  from "lodash.debounce";
import "./home.scss";
import CardInfo from "../../Components/CardInfo/CardInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStoreSearchTerm } from "../../Redux/searchTermSlice";
import { setMovieButton, setTvShowsButton } from "../../Redux/buttonsSlice";
import MovieTvService from "../../Services/MovieTvService";
import { setLoader } from "../../Redux/loaderSlice";
import { FaRegFrown } from "react-icons/fa";

interface ITopTenTvShow {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface ITopTenMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function Home() {
  const dispatch = useDispatch();

  const { storeSearchTerm } = useSelector(
    (state: any) => state.searchTermStore
  );

  const { tvShowsButton } = useSelector(
    (state: any) => state.buttonsStore
  );

  const { movieButton } = useSelector(
    (state: any) => state.buttonsStore
  );

  const [topTenTv, setTopTenTv] = useState<ITopTenTvShow[] | null>(null);
  const [topTenMovie, setTopTenMovie] = useState<ITopTenMovie[] | null>(null);

  const [searchedItems, setSearchedItems] = useState<ITopTenMovie[] | null>(null);;

  useEffect(() => {
    getTopTvShows();
    getTopMovies();
  }, []);

  useEffect(() => {
    storeSearchTerm.length > 2 && handleSearch();
  }, [tvShowsButton, storeSearchTerm]);

  const getTopTvShows = (): void => {
    dispatch(setLoader(true));
    MovieTvService.getTopTenTvShows()
      .then((res) => {
        setTopTenTv(res.data.results.slice(0, 10));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoader(false)));
  };

  const getTopMovies = (): void => {
    dispatch(setLoader(true));
    MovieTvService.getTopTenMovies()
      .then((res) => {
        setTopTenMovie(res.data.results.slice(0, 10));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoader(false)));
  };

  const handleMovieClick = (): void => {
    dispatch(setTvShowsButton(false));
    dispatch(setMovieButton(true));
  };

  const handleTvShowsClick = (): void => {
    dispatch(setMovieButton(false));
    dispatch(setTvShowsButton(true));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStoreSearchTerm(e.target.value))
  }

  const debouncedSearch = debounce(handleSearchChange, 1000);

  const handleSearch = (): void => {
    if(tvShowsButton){
      return searchTvShows();
    }
    if(movieButton){
      return searchMovies();
    }
  }

  const searchTvShows = (): void => {
    dispatch(setLoader(true));
    MovieTvService.searchTvShows(storeSearchTerm)
                  .then(res => {
                    // console.log(res.data);
                    setSearchedItems(res.data.results)
                  })
                  .catch(err => {
                    console.log(err);
                  })
                  .finally(() => dispatch(setLoader(false)));
  }

  const searchMovies = (): void => {
    dispatch(setLoader(true));
    MovieTvService.searchMovie(storeSearchTerm)
                  .then(res => {
                    // console.log(res.data);
                    setSearchedItems(res.data.results)
                  })
                  .catch(err => {
                    console.log(err);
                  })
                  .finally(() => dispatch(setLoader(false)));
  }

  const noResultsMsgLayout = () => {
    return (
      <div className="home-content-no-results">
        <FaRegFrown className="no-results-icon" />
        <p> 
          Sorry we didn't find anything, try something else or switch buttons! 
        </p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home-title">
        <h2>Find movies / TV shows</h2>
      </div>

      <input
        type="search"
        placeholder="Search Movie"
        className="home-search"
        defaultValue={storeSearchTerm}
        onChange={debouncedSearch}
      />

      <div className="home-btns">
        <button className={`btn movie ${movieButton && "active"}`} onClick={handleMovieClick} > movies </button>
        <button className={`top ${storeSearchTerm.length > 2 ? "hide-top animate__animated animate__zoomOut" : null }`}> Top 10 </button>
        <button className={`btn tv ${tvShowsButton && "active"}`} onClick={handleTvShowsClick} > TV Shows </button>
      </div>


      {
        tvShowsButton && storeSearchTerm.length < 3 ?
        <div className="home-content">
          {
            topTenTv ? 
              topTenTv.map((item: ITopTenTvShow, index) => {
                return <CardInfo {...item} key={index} />;
              })
              : null
          }
        </div>
        :
        null
      }

      {
        movieButton && storeSearchTerm.length < 3 ?
        <div className="home-content">
          {
            topTenMovie ? 
            topTenMovie.map((item: ITopTenMovie, index) => {
              return <CardInfo {...item} key={index}/>
            })
            :
            null
          }
        </div>
        :
        null
      }

      {
        tvShowsButton && searchedItems && storeSearchTerm.length >= 3 ?
        <div className="home-content">
          {
            searchedItems && searchedItems.length > 0 ? 
            searchedItems.map((item: ITopTenMovie, index) => {
              return <CardInfo {...item} key={index}/>
            })
            :
            noResultsMsgLayout()
          }
        </div>
        :
        null
      }

      {
        movieButton && searchedItems && storeSearchTerm.length >= 3 ?
        <div className="home-content">
          {
            searchedItems && searchedItems.length > 0 ? 
            searchedItems.map((item: ITopTenMovie, index) => {
              return <CardInfo {...item} key={index}/>
            })
            :
            noResultsMsgLayout()
          }
        </div>
        :
        null
      }

    </div>
  );
}

export default Home;
