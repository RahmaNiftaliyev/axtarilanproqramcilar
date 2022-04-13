import React from 'react';
import Footer from '../../common/footer/Footer';
import Luna from './../../common/assets/Luna.mp4';

const Home = () => {

  return (
    <div className={'home-dashboard'}>
      <video src={Luna} loop autoPlay muted style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
      }} />
      <nav className={'nav-section d-flex align-items-center justify-content-between'}>

      </nav>


      <Footer />

    </div>
  );
};


export default Home;