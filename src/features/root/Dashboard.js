/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './../common/register/Register';
import ReactCalendar from './../tool/calendar/ReactCalendar';
import ChatApp from '../tool/chat/ChatApp';
import Home from '../components/home/Home';
import Explore from '../components/explore/Explore';
import TopRanks from '../components/topranks/TopRanks';
import OnlineCourses from '../components/onlinecourses/OnlineCourses';


const Dashboard = () => {
  const [freelancer, setFreelancer] = React.useState(false);
  const [customer, setCustomer] = React.useState(false);

  const handleDyanmicState = (callback = (paramsSetter = !freelancer && !customer ? null : freelancer ? setCustomer : setFreelancer) => {
    if (paramsSetter) {
      paramsSetter(prev => prev === true ? !prev : prev);
    }

  }) => {

    callback(0);
  };


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*FORM REGISTER LOGIN*/}
        <Route path='/register' element={<Register freelancer={freelancer} customer={customer} />} />

        {/*NAVIGATION LINKS EXPLORE TOP-RANKS ONLINE-COURSES */}
        <Route path='/explore' element={<Explore />} />
        <Route path='/ranks' element={<TopRanks />} />
        <Route path='/courses' element={<OnlineCourses />} />

        {/*TOOLS*/}
        <Route path='/calendar' element={<ReactCalendar />} />
        <Route path='/chat' element={<ChatApp />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
