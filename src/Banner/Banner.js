import { useEffect, useState } from 'react';
import '../Banner/Banner.css';
import dosiku from '../imgpng/dosiku.png';

const Banner = () => {
  return( 
    <div className='banner'>
      <img src={dosiku} alt="Dosiku Banner" />
    </div>
  );
}

function BannerChange() {
  const [bannerUrl, setBannerUrl] = useState('../imgpng/dosiku.png');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerUrl('../imgpng/ohjummu.png');
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return( 
    <div className='img-container'>
      <img src={bannerUrl} alt="Changing Banner" className='changing-banner' />
    </div>
  );
}

export default Banner;