import React from 'react';
import ReactEarth from 'react-earth';

const Home = () => {

  const cities = [{
    'lat': 42.3601,
    'lng': 71.0589,
  }, {
    'lat': 74.0721,
    'lng': 4.7110,
  }, {
    'lat': 45.31,
    'lng': 2.04,
  }, {
    'lat': 174.72,
    'lng': 36.8249,
  }, {
    'lat': 18.42,
    'lng': 33.9249,
  }];


  return (
    <div className={'home-dashboard'}>
      <ReactEarth
        className={'globe-container'}
        cloudOpacity={0.3}
        citySize={50}
        showCloud={true}
        speed={8}
        width={900}
        height={900}
        cities={cities}
      />
    </div>
  );

};

export default Home;