import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
// import Globe from 'react-globe.gl';
import { Link } from 'react-router-dom';
import facebook from './../../common/assets/png/Facebook.png';
import google from './../../common/assets/png/Google.png';
import instagram from './../../common/assets/png/Instagram.png';
import twitter from './../../common/assets/png/Twitter.png';
import whatsapp from './../../common/assets/png/WhatsApp.png';
import searchIcon from './assets/search-normal.png';

const Home = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let increament = 0.02;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.1, 0.1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [37.2546, -122.1278], size: 0.03 },
        { location: [40.1245, -24.0], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += increament;
        // increament += increament / 1000
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="home-dashboard">
      <div className="Nav">
        <div className="nav-content-container d-flex align-items-center">
          <ul>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/discover">Site Map</Link>
            </li>
            <li>
              <Link to="/ranks">Top Ranks</Link>
            </li>
            <li>
              <Link to="/courses">Online Courses</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Sign In</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Aside d-flex align-items-center">
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{
            width: '100%',
            height: 'calc(100% - 180px)',
          }}
        >
          <div className="aside-header">
            <div>
              <img src={searchIcon} alt="wanted app asie search icon" />
            </div>
          </div>
          <div className="aside-bottom">
            <div className="d-flex flex-column align-items-center justify-content-between">
              <img src={facebook} alt="wanted app social media icons" />
              <img src={instagram} alt="wanted app social media icons" />
              <img src={twitter} alt="wanted app social media icons" />
              <img src={google} alt="wanted app social media icons" />
              <img src={whatsapp} alt="wanted app social media icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="Main">
        <div className="main-content-container">
          <h2>
            we build the future of modern <br /> work and social networking
          </h2>
          <p>
            Millions of developers and freelancers build, ship their software on
            wanted largest and most advanced social platform in the world
          </p>
          <div className="d-flex align-items-center">
            <input type="text" id="user_email" placeholder="Email address" />
            <button className="btn-mktg">Sign up for wanted</button>
          </div>
        </div>
      </div>
      <div className="Footer">
        <hr />
        <p>Wanted &copy; 2022</p>
      </div>
      <div className="Globe">
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
        />
      </div>
    </div>
  );
};

export default Home;

/*



  
*/
