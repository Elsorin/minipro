import '../App.css';
import Elemental from '../imgpng/Elemental.jpg';
import Avengers from '../imgpng/Avengers.jpg';
import Job from '../imgpng/Job.jpg';
import Winter from '../imgpng/Winter.jpg';
import Mission from '../imgpng/Mission.jpg';
import { useNavigate } from 'react-router-dom';


// 현재상영중 라인
const MovieBox = () => {
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
            <div className="first">
              <img src={Elemental} />
              <p>엘리멘탈</p>
              <p>예매율 : 65%</p>
              <button className='btn' onClick={goTicketPage} >예매하기</button>
            </div>

            <div className="first">
              <img src={Avengers} />
              <p>어벤져스 : 엔드게임</p>
              <p>예매율 : 97.8%</p>
              <button className='btn' onClick={goTicketPage}>예매하기</button>
            </div>

            <div className="first">
              <img src={Job} />
              <p>극한직업</p>
              <p>예매율 : 60%</p>
              <button className='btn' onClick={goTicketPage}>예매하기</button>
            </div>

            <div className="first">
              <img src={Winter} />
              <p>겨울왕국2</p>
              <p>예매율 : 92%</p>
              <button className='btn' onClick={goTicketPage}>예매하기</button>
            </div>

            <div className="first">
              <img src={Mission} />
              <p>미션임파서블 7</p>
              <p>예매율 : 85%</p>
              <button className='btn' onClick={goTicketPage}>예매하기</button>
            </div>
          </div>
          {/* <Banner/> */}

        </div>
      </div>
    </>
  );
}

export default MovieBox;