/* eslint-disable no-unused-vars */
import React from 'react';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';
import { useTypeWriter } from '@vegadev/react-type-writer';

// eslint-disable-next-line react/prop-types
const Register = ({ handleDynamicState, freelancer, customer,setCustomer,setFreelancer }) => {
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
    <div className="registers-home-page">
      <div className="choose-container d-flex justify-content-between">
        <div className="choose-container-item">
          <h2>Customer right's</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            debitis commodi veniam provident expedita, ducimus iure cumque
            consectetur praesentium neque illo officiis laboriosam nemo vel hic.
            Magni voluptatem consequuntur distinctio magnam beatae perspiciatis,
            esse accusamus quidem! Culpa corporis tempora modi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam debitis commodi
            veniam provident expedita, ducimus iure cumque consectetur
            praesentium neque illo officiis laboriosam nemo vel hic. Magni
            voluptatem consequuntur distinctio magnam beatae perspiciatis, esse
            accusamus quidem! Culpa corporis tempora modi? debitis commodi
            veniam provident expedita, ducimus iure cumque consectetur
            praesentium neque illo officiis laboriosam nemo vel hic. Magni
            voluptatem consequuntur distinctio magnam beataee
          </p>
          <button
            onClick={(e) => handleDynamicState(e.target.title)}
            title="customer"
          >
            Be Customer
          </button>
        </div>
        <div className="choose-container-item">
          <h2>Freelancer's right's</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            debitis commodi veniam provident expedita, ducimus iure cumque
            consectetur praesentium neque illo officiis laboriosam nemo vel hic.
            Magni voluptatem consequuntur distinctio magnam beatae perspiciatis,
            esse accusamus quidem! Culpa corporis tempora modi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam debitis commodi
            veniam provident expedita, ducimus iure cumque consectetur
            praesentium neque illo officiis laboriosam nemo vel hic. Magni
            voluptatem consequuntur distinctio magnam beatae perspiciatis, esse
            accusamus quidem! Culpa corporis tempora modi? debitis commodi
            veniam provident expedita, ducimus iure cumque consectetur
            praesentium neque illo officiis laboriosam nemo vel hic. Magni
            voluptatem consequuntur distinctio magnam beatae
          </p>
          <button
            onClick={(e) => handleDynamicState(e.target.title)}
            title="employee"
          >
            Be Freelancer
          </button>
        </div>
      </div>
    </div>
  ) : freelancer ? (
    <EmployeeRegister setFreelancer={setFreelancer} />
  ) : (
    <CustomerRegister setCustomer={setCustomer} />
  );
};

export default Register;
