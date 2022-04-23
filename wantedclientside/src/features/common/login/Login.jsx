import React, { useState } from 'react';
import { useTypeWriter } from '@vegadev/react-type-writer';
import EmployeeLogin from './EmployeeLogin';
import CustomerLogin from './CustomerLogin';
import { useNavigate, Link } from 'react-router-dom';




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
      <div className="upper-content">
        {/* upper content top */}
        <div className="upper-content-top">
        <h3>lorem ipsum</h3>
          <div>
          <ul className='d-flex'>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/ranks">Top ranks</Link>
            </li>
            <li>
              <Link to="/courses">Online Courses</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <button onClick={handleNavigationSignUpPage}>Sign Up</button>
          </div>
        </div>
        {/* upper content right */}
        <div className="upper-content-left">
          <h1>Wanted {text}</h1>
          <p>
            Hire freelancer 1 year warranty free and premium plans have a good
            day with yout friends work together with Freelancer's Also your
            social media and code IDE all in one
          </p>
        </div>
        {/* upper content right */}
        <div className="upper-content-right ">
          {(!loginCustomer || !loginEmployee) && (
            <div className="choosie-login-logic">
              <h1 className="d-flex">
                <div
                  onMouseEnter={capitalizeOnMouseEnter}
                  onMouseLeave={capitalizeOnMouseLeave}
                >
                  C
                </div>
                <span>ustomer</span>
              </h1>
              <h1 className="d-flex">
                <div
                  onMouseEnter={capitalizeOnMouseEnter}
                  onMouseLeave={capitalizeOnMouseLeave}
                >
                  F
                </div>
                <span>reelancer</span>
              </h1>
            </div>
          )}
          {loginCustomer ? (
            <CustomerLogin />
          ) : loginEmployee ? (
            <EmployeeLogin />
          ) : null}
        </div>
        <div className="bottom-content"></div>
      </div>
    </div>
  );
};

export default Login;
