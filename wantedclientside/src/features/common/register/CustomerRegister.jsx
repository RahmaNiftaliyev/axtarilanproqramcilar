/*eslint-disable*/
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { selectAllGenders } from './../../redux/gendersSlice';
import { selectAllMonthes } from './../../redux/registerSlice';
import { Link } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';

const CustomerRegister = ({ setCustomer }) => {
  const allGenders = useSelector(selectAllGenders);
  const allRegisters = useSelector(selectAllMonthes);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [isSetted, setIsSetted] = useState(false);
  const [birthday, setBirthday] = useState({
    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear(),
  });

  const [optionCheck, setOptionCheck] = useState(false);

  // 12 months
  const months = allRegisters.map((register) => register.name);

  const renderedMonths = months.map((month, index) => {
    return (
      <option
        key={index}
        defaultValue={month}
        selected={birthday.month === index ? true : false}
      >
        {month}
      </option>
    );
  });

  // today in add

  const handleDateOfBirth = (e) => {
    setBirthday({
      ...birthday,
      [e.target.name]: e.target.value,
    });
  };

  const dayLogicController = (
    counter = allRegisters.find((monthObj) => {
      return parseInt(monthObj.id) === birthday.month ? monthObj : null;
    })
  ) => {
    let days = [];
    const maxContent = counter;
    if (maxContent.maxDate >= 31) {
      for (let i = 0; i <= maxContent.maxDate; i++) {
        days.push(i);
      }
    } else {
      for (let i = 1905; i <= maxContent; i++) {
        days.push(i);
      }
    }

    return days;
  };

  // gender options
  const renderedOptions = allGenders.map((gender) => {
    return (
      <option key={gender.id} value={gender.gender}>
        {gender.gender}
      </option>
    );
  });

  // write your email or phone-number 2step choise unput data and attributes controller
  const emailNumberHandler = (e) => {
    console.log(e.target.value);
  };

  // try submit registration form
  const handleRegister = (e) => {
    e.preventDefault();
  };

  // !handle main choisable customer employee menu
  const handleBackUp = () => {
    setCustomer((prev) => !prev);
  };

  return (
   <div></div>
  );
};

export default CustomerRegister;
