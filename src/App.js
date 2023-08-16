import './App.css';
import './Banner/Banner.css';
import {Routes, Route } from 'react-router-dom';
import Banner from './Banner/Banner';
import Navi from './NaviBar/Navi';
import MovieBox from './MovieBox/MovieBox';
import MovieBox1 from './MovieBox/MovieBox1';
import Ticketing from './Ticketing/Ticketing';
import { useState } from 'react';
import Elemental from './imgpng/Elemental.jpg';
import Avengers from './imgpng/Avengers.jpg';
import Job from './imgpng/Job.jpg';
import Winter from './imgpng/Winter.jpg';
import Mission from './imgpng/Mission.jpg';


function App(props) {
  const [movies, setMovies] = useState([
    {
      title: "엘리멘탈",
      image: Elemental,
      rating: 65,
    },
    {
      title: "어벤져스 : 엔드게임",
      image: Avengers,
      rating: 97.8,
    },
    {
      title: "극한직업",
      image: Job,
      rating: 60,
    },
    {
      title: "겨울왕국2",
      image: Winter,
      rating: 92,
    },
    {
      title: "미션임파서블 7",
      image: Mission,
      rating: 85
    }
  ]);
  return (
    <>
    <div className="App">
      <Routes>
       <Route path='/' element={<div>
        <Navi />
        <MovieBox movies={movies}/>
        <MovieBox1 movies={movies}/>
        <Banner />
       </div>}/>
       <Route path='/ticket' element={<Ticketing location={props.location} />} />

       <Route path='/food' element={<div>음식페이지</div>}/>
     </Routes>
      


      
  
    
    </div>
  </>  
  );
      
      
}

export default App;