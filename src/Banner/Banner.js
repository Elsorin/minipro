import { useEffect, useState } from 'react';
import '../Banner/Banner.css';
import dosiku from './dosiku.png';
import mealkit from './mealkit.png';
import ohjummu from './ohjeammu.png';

const Banner = () => {
  const bannerImages = [
    dosiku,
    mealkit,
    ohjummu,
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);
  

  return () => clearInterval(timer);
}, []);

return (
  <div className='banner-ad'>
    <img src={bannerImages[imageIndex]} alt='Banner Ad' />
  </div>
);

};



export default Banner;