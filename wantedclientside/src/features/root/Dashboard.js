/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './../common/register/Register';
import Login from './../common/login/Login';
import ReactCalendar from './../tool/calendar/ReactCalendar';
import ChatApp from '../tool/chat/ChatApp';
import Home from '../components/home/Home';
import Explore from '../components/explore/Explore';
import TopRanks from '../components/topranks/TopRanks';
import OnlineCourses from '../components/onlinecourses/OnlineCourses';
import TestView from './../test/manual/TestView';
import { FaPastafarianism } from 'react-icons/fa';
import Recovery from '../common/login/Recovery';

const Dashboard = () => {
  const [freelancer, setFreelancer] = React.useState(false);
  const [customer, setCustomer] = React.useState(false);

  const handleDyanmicState = (clickedTitle = null) => {
    clickedTitle === 'customer'
      ? setCustomer(!customer)
      : setFreelancer(!freelancer);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*FORM REGISTER LOGIN*/}
        <Route
          path="/register"
          element={
            <Register
              handleDynamicState={handleDyanmicState}
              freelancer={freelancer}
              customer={customer}
              setCustomer={setCustomer}
              setFreelancer={setFreelancer}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />

        {/*NAVIGATION LINKS EXPLORE TOP-RANKS ONLINE-COURSES */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/ranks" element={<TopRanks />} />
        <Route path="/courses" element={<OnlineCourses />} />

        {/*TOOLS*/}
        <Route path="/calendar" element={<ReactCalendar />} />
        <Route path="/chat" element={<ChatApp />} />

        {/* TEST URL FOR CUSTOM VIEW */}
        <Route path="/test" element={<TestView />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
