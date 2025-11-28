import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const formValidation = () => {
    let newError = {};
    let{username , password} =formData;
    //username validation
    if (username.trim().length < 2) {
      newError.username = "UserName Must be atleast 2 Character long";
    }
    const isValidUsername = /^[a-zA-Z ]+$/;
    if (!isValidUsername.test(username)) {
      newError.username = "Enter the correct username";
    }

    //password validation
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!isValidPassword.test(password)) {
      newError.password = "Enter valid email";
    }

    return newError;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const validateErrors = formValidation();
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      toast.success("You have been logged in successfullly ");
      setformData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="box">
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <h1 style={{color:"grey"}}>LOGIN</h1>

        <label htmlFor="">Username:</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={formData.username}
          name="username"
          onChange={changeHandler}
        />
        {errors.username && <span className="errors">{errors.username}</span>}

        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          name="password"
          onChange={changeHandler}
        />
        {errors.password && <span className="errors">{errors.password}</span>}


        <button type="submit">Login</button>
        <span>Doesn't have an account ?</span>
        <span>
          <Link to="/signup"> sign up </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
