/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { selectAllGenders } from "./../../redux/gendersSlice";

const Register = () => {
  const allGenders = useSelector(selectAllGenders);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [isSetted, setIsSetted] = useState(false);

  const renderedOptions = allGenders.map((g) => {
    return <option id={g.id}>{g.gender}</option>;
  });

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
            <Input
              type="email"
              id="email"
              placeholder={error && error.length > 0 ? error : "First Name"}
              name="email"
              aria-labelledby="email"
              value={isSetted ? email : ""}
              onChange={emailNumberHandler}
            />
            <FormGroup></FormGroup>
            {/* password */}
            <FormGroup></FormGroup>
            {/* birthday year month day */}
            <FormGroup></FormGroup>
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
