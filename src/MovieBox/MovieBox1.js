import Sleep from '../imgpng/Sleep.jpg';
import Mountain from '../imgpng/Mountain.jpg';
import Onetime from '../imgpng/Onetime.jpg';
import Veniscasper from '../imgpng/Veniscasper.jpg';
import Inocent from '../imgpng/Inocent.jpg';
import '../App.css';

//상영 예정작 라인
const MovieBox1 = () => {
  return (
    <>
      <div className='container'>
          <div className='text'>
            <h1>상영 예정작</h1>
          </div>
        <div className='contents1'>
          <div className='second'>
            <img src={Sleep} />
            <p>잠</p>
            <p>2023.09 개봉예정</p>
          </div>
          <div className='second'>
            <img src={Mountain} />
            <p>여덟개의 산</p>
            <p>2023.09 개봉예정</p>
          </div>
          <div className='second'>
            <img src={Onetime} />
            <p>어느 멋진 아침</p>
            <p>2023.09 개봉예정</p>
          </div>
          <div className='second'>
            <img src={Inocent} />
            <p>이노센트</p>
            <p>2023.09 개봉예정</p>
          </div>
          <div className='second'>
            <img src={Veniscasper} />
            <p>베니스 유령 살인사건</p>
            <p>2023.09 개봉예정</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieBox1;