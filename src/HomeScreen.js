import React from 'react'
import './HomeScreen.css';
import Nav from './Nav';
import Row from './Row';
import Banner from './Banner';
import requests from './Requests';
function HomeScreen() {
    return (
        <div className="homeScreen">
            
            <Nav/>


             <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rater" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumetaries}/>
        </div>
    )
}

export default HomeScreen
