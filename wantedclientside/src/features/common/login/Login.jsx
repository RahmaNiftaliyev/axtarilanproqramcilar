import React, { useState } from 'react';
import { useTypeWriter } from '@vegadev/react-type-writer';
import EmployeeLogin from './EmployeeLogin';
import CustomerLogin from './CustomerLogin';
import { useNavigate, Link } from 'react-router-dom';
import facebook from './../../common/assets/png/Facebook.png';
import google from './../../common/assets/png/Google.png';
import instagram from './../../common/assets/png/Instagram.png';
import twitter from './../../common/assets/png/Twitter.png';
import whatsapp from './../../common/assets/png/WhatsApp.png';
import searchIcon from './../../components/home/assets/search-normal.png';
import styles from './login.module.css';

const Login = () => {
  const [loginCustomer, setLoginCustomer] = useState(false);
  const [loginEmployee, setLoginEmployee] = useState(false);

  const capitalizeOnMouseEnter = (e) => {
    if (e.target.innerText === 'F') {
      setLoginEmployee((prev) => (prev === true ? prev : !prev));
      setLoginCustomer((prev) => (prev === false ? prev : !prev));
    } else {
      setLoginCustomer((prev) => (prev === true ? prev : !prev));
      setLoginEmployee((prev) => (prev === false ? prev : !prev));
    }
  };

  const capitalizeOnMouseLeave = (e) => {
    if (e.target.innerText === 'F') {
      setLoginEmployee((prev) => prev);
      setLoginCustomer((prev) => (prev === false ? prev : !prev));
    } else {
      setLoginCustomer((prev) => prev);
      setLoginEmployee((prev) => (prev === false ? prev : !prev));
    }
  };

  const navigate = useNavigate();

  const handleNavigationSignUpPage = () => {
    navigate('/register');
  };

  const typeWriterInvoker = () => {
    return {
      text: [
        'your social media app',
        'your office',
        'and also your IDE',
        'oh sorry one more thing!',
        'also your chat audio and video call app',
      ],
      infiniteLoop: true,
      blinker: '|',
      delay: 25,
      blinkerDelay: 400,
    };
  };

  const text = useTypeWriter(typeWriterInvoker());

  return (
    <div className="login-home-page">
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
        <div className="Main"></div>
        <div className="Footer">
          <hr />
          <p>Wanted &copy; 2022</p>
        </div>
        <div className="Globe">
          <div className={`${styles.package_registry}`}>
          <span>
                ~/wanted/login
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
