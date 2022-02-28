import React from "react";
import "./HomeScreen.css";
import Banner from "../Banner";
import Navbar from "../Navbar";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row
        title="Action Movies"
        fetchUrl={requests.fecthActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
        isLargeRow
      />
      <Row
        title="Animated Movies"
        fetchUrl={requests.fetchAnimationMovies}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
