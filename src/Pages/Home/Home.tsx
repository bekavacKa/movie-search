import React from "react";
import "./home.scss";
import CardInfo from "../../Components/CardInfo/CardInfo";


function Home() {


  return (
    <div className="home">
      <div className="home-title">
        <h2>Find your favorite movies or TV shows</h2>
      </div>
      
      <input type="search" placeholder="Search Movie" className="home-search" />

      <div className="home-btns">
        <button className="btn movie"> movies </button>
        <button className="btn top"> Top 10 </button>
        <button className="btn tv active"> TV Shows </button>
      </div>

      <div className="home-content">
        <CardInfo />
      </div>

    </div>
  );
}

export default Home;
