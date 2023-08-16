import '../App.css';
import Banner from '../Banner/Banner';
import { useNavigate } from 'react-router-dom';
// 포스터 더 출력되는 문제 찾아야 함 


// 현재상영중 라인
const MovieBox = ({ movies }) => {
  const navigate = useNavigate();
  const goTicketPage = () => {
    navigate('/ticket');
  };

  return (
    <>
      <div className='movieBox'>
        <div className='container'>
          <div className='text'>
            <h1>현재 상영중</h1>
          </div>

          <div className='contents'>
            {movies.map((movies, index) => (
              <div className="first" key={index}>
                <img src={movies.image} alt={movies.title} />
                <p>{movies.title}</p>
                <p>예매율 : {movies.rating}%</p>
                <button className='btn' onClick={goTicketPage} >예매하기</button>
              </div>
              ))}

          </div>
          

        </div>
      </div>
    </>
  );
}

export default MovieBox;