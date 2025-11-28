import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    address: "",
  });
    
 

  //Changes on input text
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Errors handler
  const [errors, setErrors] = useState({});

  const formValidation = () => {
    let newErrors = {};
    let { username, email, contact, password, address } = formData;

    //User Validation
    if (username.trim().length < 2) { //.trim=space mita deta hai
      newErrors.username = "UserName Must be atleast 2 Character long";
    }

    const isValidName = /^[a-zA-Z ]+$/;
    if (!isValidName.test(username)) {
      newErrors.username = "Invalid User Name";
    }
    //Email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail.test(email)) {
      newErrors.email = "Invalid Email formate";
    }
    // Contact validation
    const isvalidContact = /^[6-9]\d{9}$/;
    if (!isvalidContact.test(contact)) {
      newErrors.contact = "Invalid Contact";
    }
    // Password validation
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!isValidPassword.test(password)) {
      newErrors.password = "Enter Strong Password";
    }
    //Address validation
    if (address.trim().length == 0) {
      newErrors.address = "Enter Address";
    }

    return newErrors;
  };

  //handle submit of form
  const submitHandler = (e) => {
    e.preventDefault();
    const validateErrors = formValidation();
    setErrors(validateErrors);    
    if (Object.keys(validateErrors).length === 0) {
      let exitingUser = JSON.parse(localStorage.getItem("userData")) || []

      const updateUser = [...exitingUser , formData]//phele se jo data hai vahi rhe or new data bhi add ho jye 

      localStorage.setItem("userData",JSON.stringify(updateUser))

      toast.success("Submit successfully ");
      setformData({
        username: "",
        email: "",
        contact: "",
        password: "",
        address: "",
      });
    }else{
      toast.error("Correct all the Errors and then submit")
    }
  };

  return (
    <div className="box">
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <h3 style={{color:"grey"}}>Signup Page to My Book App </h3>

        <label htmlFor="u-name">User Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="u-name"
          value={formData.username}
          name="username"
          onChange={changeHandler}
        />
        {errors.username && <span className="errors">{errors.username}</span>}

        <label htmlFor="u-email">Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          value={formData.email}
          name="email"
          onChange={changeHandler}
        />
        {errors.email && <span className="errors">{errors.email}</span>}

        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          placeholder="Enter Contact Number"
          id="contact"
          value={formData.contact}
          name="contact"
          onChange={changeHandler}
        />
        {errors.contact && <span className="errors">{errors.contact}</span>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          value={formData.password}
          name="password"
          onChange={changeHandler}
        />
        {errors.password && <span className="errors">{errors.password}</span>}

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          placeholder="Enter Address"
          id="address"
          value={formData.address}
          name="address"
          onChange={changeHandler}
        />
        {errors.address && <span className="errors">{errors.address}</span>}

        <button type="submit">SignUp</button>
        <span>Already have an account? </span>
        <span style={{margin:"-9px"}}>
          <Link to="/login">Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
