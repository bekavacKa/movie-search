import axios from 'axios';

export default class MovieTvService {
    static getTopTenTvShows(){
        return axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=13c8b139c97aed1ece160f18ae0b8f09&language=en-US&page=1");
    }
    static getTopTenMovies(){
        return axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13c8b139c97aed1ece160f18ae0b8f09&language=en-US&page=1");
    }
    static getTvShowDetails(id:number){
        return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=13c8b139c97aed1ece160f18ae0b8f09&language=en-US`)
    }
    static searchTvShows(search: string){
        return  axios.get(`https://api.themoviedb.org/3/search/tv?api_key=13c8b139c97aed1ece160f18ae0b8f09&language=en-US&page=1&query=${search}&include_adult=false`)
    }
    static searchMovie(search: string){
        return  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13c8b139c97aed1ece160f18ae0b8f09&language=en-US&query=${search}&page=1&include_adult=false`)
    }
}