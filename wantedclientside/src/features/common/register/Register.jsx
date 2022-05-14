/* eslint-disable no-unused-vars */
import React from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';
import { useTypeWriter } from '@vegadev/react-type-writer';
import { useNavigate, Link } from 'react-router-dom';
import facebook from './../../common/assets/png/Facebook.png';
import google from './../../common/assets/png/Google.png';
import instagram from './../../common/assets/png/Instagram.png';
import twitter from './../../common/assets/png/Twitter.png';
import whatsapp from './../../common/assets/png/WhatsApp.png';
import searchIcon from './../../components/home/assets/search-normal.png';
import styles from './register.module.css'

// eslint-disable-next-line react/prop-types
const Register = ({
  handleDynamicState,
  freelancer,
  customer,
  setCustomer,
  setFreelancer,
}) => {
  const navigate = useNavigate();

  const handleNavigationLoginPage = () => {
    navigate('/login');
  };

  const typeWriterInvoker = () => {
    return {
      text: [
        'Axtarılan Proqramçılarda qeydiyyatdan keç',
        'Sign in Wanted Developers App',
      ],
      infiniteLoop: true,
      blinker: '|',
      delay: 100,
      blinkerDelay: 2000,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return !freelancer && !customer ? (
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
        {/* main */}
    </div>
    <div className="Footer">
      <hr />
      <p>Wanted &copy; 2022</p>
    </div>
    <div className="Globe">
          <div className={`${styles.package_registry}`}>
              <span>
                ~/wanted/register
              </span>
          </div>
    </div>
  </div>
  ) : freelancer ? (
    <div className="registers-home-page">
      <EmployeeRegister setFreelancer={setFreelancer} />
    </div>
  ) : (
    <div className="registers-home-page">
      <CustomerRegister setCustomer={setCustomer} />
    </div>
  )
};

export default Register;
