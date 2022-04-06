/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { selectAllGenders } from "./../../redux/gendersSlice";
import { selectAllMonthes } from "./../../redux/registerSlice";

const Register = () => {
  const allGenders = useSelector(selectAllGenders);
  const allRegisters = useSelector(selectAllMonthes);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isSetted, setIsSetted] = useState(false);
  const [birthday, setBirthday] = useState({
    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear(),
  });

  const [optionCheck, setOptionCheck] = useState(false);

  // gender options
  const renderedOptions = allGenders.map((gender) => {
    return (
      <option key={gender.id} value={gender.gender}>
        {gender.gender}
      </option>
    );
  });

  console.log(birthday);

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

  const dayLogicController = (
    counter = allRegisters.find((monthObj) => {
      return parseInt(monthObj.id) === birthday.month ? monthObj.maxDate : null;
    })
  ) => {
    let days = [];
    const maxContent = counter;
    if (maxContent.maxDate >= 31) {
      for (let i = 0; i <= maxContent.maxDate; i++) {
        debugger;
        days.push(i);
      }
    } else {
      for (let i = 1905; i <= maxContent; i++) {
        days.push(i);
      }
    }

    return days;
  };

  const emailNumberHandler = (e) => {
    console.log(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="homeBackground">
      <div className="p-1 formContainer-md">
        <h1>Axtarılan Proqramçılar</h1>
        <div>
          <h2>Create a new account</h2>
          <p>It’s quick and easy.</p>
          <Form onSubmit={handleRegister}>
            {/* firstname and lastname */}
            <FormGroup className="grid-initial frame-2">
              <Input
                type="text"
                id="firstName"
                placeholder={error && error.length > 0 ? error : "First Name"}
                name="firstName"
                aria-labelledby="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                id="lastName"
                placeholder={error && error.length > 0 ? error : "Last Name"}
                name="lastName"
                aria-labelledby="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            {/* email or mobile number */}

            <FormGroup>
              <Input
                type="email"
                id="email"
                placeholder={error && error.length > 0 ? error : "username"}
                name="email"
                aria-labelledby="email"
                value={isSetted ? email : ""}
                onChange={emailNumberHandler}
              />
            </FormGroup>
            {/* password */}
            <FormGroup>
              <Input
                type="password"
                id="password"
                placeholder={error && error.length > 0 ? error : "password"}
                name="password"
                aria-labelledby="password"
                value={password}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            {/* birthday year month day start => */}
            <FormGroup className="grid-initial frame-3">
              <Input type="select">{renderedMonths}</Input>
              <Input type="select">
                {dayLogicController().map((day, index) => {
                  return (
                    <option
                      key={index}
                      value={day}
                      selected={birthday.day === day}
                    >
                      {day > 0 ? day : "Choose Day"}
                    </option>
                  );
                })}
              </Input>
              <Input type="select">
                {dayLogicController(birthday.year).map((year, index) => {
                  return (
                    <option
                      key={index}
                      value={year}
                      selected={birthday.year === year}
                    >
                      {year > 0 ? year : "Choose Year"}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
            {/* birthday year month day end => */}
            {/* genders */}
            <FormGroup>
              <Input type="select">
                <option>Choose Gender</option>
                {renderedOptions}
              </Input>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
