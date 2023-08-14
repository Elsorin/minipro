import './App.css';
// import './Banner.css';
import {Routes, Route } from 'react-router-dom';
import Navi from './NaviBar/Navi';
import MovieBox from './MovieBox/MovieBox';
import MovieBox1 from './MovieBox/MovieBox1';
import Ticketing from './Ticketing/Ticketing';


function App() {
  
  return (
    <>
    <div className="App">
      <Routes>
       <Route path='/' element={<div>
        <Navi />
        <MovieBox/>
        <MovieBox1 />
       </div>}/>
       <Route path='/ticket' element={<Ticketing/>}/>
       <Route path='/food' element={<div>음식페이지</div>}/>
     </Routes>
      


      {/* <div className='banner'>
        <Banner/>

      </div> */}
  
    
    </div>
  </>  
  );
      
      
}

export default App;