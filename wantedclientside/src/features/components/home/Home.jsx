import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import QRCode from 'react-qr-code';
import Iframe from 'react-iframe';
import telegram from './assets/socials/Telegram.png';
import facebook from './assets/socials/Facebook.png';
import instagram from './assets/socials/Instagram.png';
import linkedIn from './assets/socials/LinkedIn.png';
import twitter from './assets/socials/Twitter.png';
import tiktok from './assets/socials/Tiktok.png';

const Home = () => {
  const canvasRef = useRef();

  const [url, setUrl] = React.useState(`${window.location}`);

  const handleClick = (e) => {
    let url = `https://www.${e.target.title}.com/signin`;

    setUrl(url);
  };

  useEffect(() => {
    let phi = 0;

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
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
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
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="home-dashboard">
      <div className="Nav">
        <div className="nav-content-container"></div>
      </div>
      <div className="Aside">
        <div className="aside-header">
          {/* <div className="card-logo"></div> */}
        </div>
        <div className="aside-body"></div>
        <div className="aside-bottom"></div>
      </div>
      <div className="Main">
        <div className="main-content-container"></div>
      </div>
      <div className="Globe">
        <div className="glass-rocket"></div>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
        />
      </div>
      <div className="UnderGlobe">
        <div className="underglobe-content-container d-flex flex-column justify-content-between">
          <div
            className="w-100 d-flex justify-content-between qr-iframe-container px-3"
            style={{
              paddingTop: '8px',
            }}
          >
            <QRCode value={url} size="220" />
            <Iframe
              url={
                url === `${window.location}`
                  ? 'http://www.youtube.com/embed/xDMP3i36naA'
                  : url
              }
              width="300px"
              height="220px"
              display="initial"
            />
          </div>
          <div
            className="w-100 d-flex justify-content-around"
            style={{
              paddingBottom: '8px',
            }}
          >
            <div className="social-icon-container-item">
              <img
                src={telegram}
                alt="social media icon"
                title="telegram"
                onClick={handleClick}
              />
            </div>
            <div className="social-icon-container-item">
              <img
                src={facebook}
                alt="social media icon"
                title="facebook"
                onClick={handleClick}
              />
            </div>
            <div className="social-icon-container-item">
              <img
                src={twitter}
                alt="social media icon"
                title="twitter"
                onClick={handleClick}
              />
            </div>
            <div className="social-icon-container-item">
              <img
                src={tiktok}
                title="tiktok"
                alt="social media icon"
                onClick={handleClick}
              />
            </div>
            <div className="social-icon-container-item">
              <img
                src={instagram}
                title="instagram"
                alt="social media icon"
                onClick={handleClick}
              />
            </div>
            <div className="social-icon-container-item">
              <img
                src={linkedIn}
                title="linkedIn"
                alt="social media icon"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
