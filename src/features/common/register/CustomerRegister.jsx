import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { selectAllGenders } from "./../../redux/gendersSlice";
import { selectAllMonthes } from "./../../redux/registerSlice";
import { Link } from "react-router-dom";

const CustomerRegister = () => {

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
  

  return (
    <div>
         <div className="homeBackground">
      <div className="p-1 formContainer">
        <h1 className="text-silver text-center">Axtarılan Proqramçılar</h1>
        <div className="login-register-padding">
          <h2 className="text-white">Create a new account</h2>
          <p className="text-white">It’s quick and easy.</p>
          <Form onSubmit={handleRegister} autoComplete="off">
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
                placeholder={
                  error && error.length > 0 ? error : "Mobile number or email"
                }
                name="email"
                aria-labelledby="email"
                value={isSetted ? email : ""}
                autoComplete="off"
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
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* birthday year month day start => */}
            <FormGroup className="grid-initial frame-3">
              <Input
                type="select"
                id="month"
                name="month"
                aria-labelledby="month"
                value={birthday.month}
                onChange={(e) => handleDateOfBirth(e)}
              >
                {renderedMonths}
              </Input>
              <Input
                type="select"
                id="date"
                name="date"
                aria-labelledby="date"
                value={birthday.day}
                onChange={(e) => handleDateOfBirth(e)}
              >
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
              <Input
                type="select"
                name="year"
                id="year"
                aria-labelledby="year"
                value={birthday.year}
                onChange={(e) => handleDateOfBirth(e)}
              >
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

            {/* genders start => */}
            <FormGroup>
              <Input type="select">
                <option>Choose Gender</option>
                {renderedOptions}
              </Input>
            </FormGroup>
            {/* genders end => */}
            {/* if gender custom => start */}
            <FormGroup>
              <Input
                type="select"
                name="option"
                id="option"
                aria-labelledby="option"
              >
                <option disabled={true}>Select your pronoun</option>
                <option value={1}>She: "Wish her a happy birthday!"</option>
                <option value={2}>He: "Wish him a happy birthday!"</option>
                <option value={6}>They: "Wish them a happy birthday!"</option>
              </Input>
              <small className="text-islamic text-md">
                Your pronoun is visible to everyone.
              </small>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Gender (optional)" />
              <small className="text-islamic">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </small>
            </FormGroup>
            {/* if gender custom => end */}
            {/* form submit button */}
            <FormGroup>
              <Button type="submit" color="success" block outline>
                Sign Up
              </Button>
              <Link to="/" className="text-decoration-none text-islamic mt-2">
                Already have an account?
              </Link>
            </FormGroup>
            {/* form submit button */}
          </Form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CustomerRegister