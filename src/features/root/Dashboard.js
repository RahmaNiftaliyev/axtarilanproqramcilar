import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './../common/register/Register';
import Login from './../common/login/Login';
import ReactCalendar from './../tool/calendar/ReactCalendar';
import video from './../common/assets/Luna.mp4';

const Dashboard = () => {
  const [wanted, setWanted] = React.useState(false);

  const handleWanted = () => {
    setWanted(!wanted);
  };

  return (
    <div className={`${!wanted ? 'homeBackground' : ''} minHeight`}>
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{
          objectFit: 'cover',
          position: 'absolute',
          zIndex: '-1',
          top: '0',
          left: '0',
        }}
      />
      <button
        className={`${!wanted ? 'wantedButton' : 'd-none'} `}
        onClick={handleWanted}
      >
        Axtarılan proqramçılar
      </button>
      <Routes>
        {wanted && <Route path="/" element={<Register />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<ReactCalendar />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
