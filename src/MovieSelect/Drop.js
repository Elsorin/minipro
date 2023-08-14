import { useState } from 'react';
import './Mselect.css';

const Drop = () => {
  const movieNames = ['--영화 선택--', '엘리멘탈', '겨울왕국2', '어벤져스 엔드게임', '극한직업']; //4번배열까지
  // const posterImg = ['']
  const [movieName, setMovieName] = useState(movieNames);
  const [moviePoster, setMoviePoster] = useState();

  const handlerSelectMovie = (e) => {
    setMovieName(e.target.value);
  }
  return(
    <>
    <div>
      {/* <input type='' id="changePoster"/> */}
      <select id="changeMovie">
        <option id='selectMovie'>--영화선택--</option>
        <option id='Elemental'>엘리멘탈</option>
        <option id='Winter'>겨울왕국2</option>
        <option id='Avengers'>어벤져스엔드게임</option>
        <option id='Job'>극한직업</option>
      </select>
      
      
      
      
      {/* <label htmlFor='drop'>영화를 선택해주세요.</label>
      <select id="drop" value={movieName} onChange={handlerSelectMovie}>
        {movieNames.map((name, index)=> (
          <option key={index} value={name}>
            {name}
          </option>
          
        ))}
      </select> */}
      
    </div>
    </>
  );
}

export default Drop;