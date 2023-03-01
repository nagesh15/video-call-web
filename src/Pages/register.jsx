import React, { useState, useEffect, useContext } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login-register.css";
import axios from "axios";
import UserContext from "../store/UserContext";

const Register = () => {
    const navigate = useNavigate();

    const initialState = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const userCtx = useContext(UserContext);

    const [formInputs, setFormInputs] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});

    const onChangeHandler = (event) => {
        //get the name and value property of input field that generates the event
        const { name, value } = event.target;

        setFormInputs((formInputs) => ({
            ...formInputs,
            [name]: value.trim(),
        }));
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const errors = {};
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex =
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}/;

        //if full name is not entered
       
        if (!formInputs.userName) {
            errors.userName = "Username is required";
        }
        
        //if email is not entered and format is wrong
        if (!formInputs.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(formInputs.email)) {
            errors.email = "Enter correct email format";
        }

        //if password is not entered and format is wrong
        if (!formInputs.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(formInputs.password)) {
            errors.password = "Password is Invalid";
        }

        //if confirm password is not entered
        if (!formInputs.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (formInputs.password !== formInputs.confirmPassword) {
            errors.confirmPassword =
                "Password and Confirm Password not matching";
        }
       
        if (Object.keys(errors).length > 0 ) {
          setFormErrors(errors)
          return ;
        }
        registrationApiCall();
    };

    const registrationApiCall = () => {
        axios
            .post("http://localhost:4000/api/user", {
              user : {
                username : formInputs.userName,
                'email' : formInputs.email,
                'password' : formInputs.password
              }  
            }, {
              headers : {
                'Content-Type' : 'application/json'
              }
            })
            .then((response) => {
                //console.log(response);
                if (response.status === 200) {
                    userCtx.setIsAuthenticated((prevAuth) => true);

                    alert("Registered Successfully");
                    navigate("/dashboard");
                    setFormInputs(initialState);
                    console.log("form valid");
                } 
            })
            .catch((err) => {
              if (err.response.status == 422) {
                alert('email already exists');
              } else {
                
              }
            });
    };

    return (
        <form action="" className="container" onSubmit={formSubmitHandler}>
            <h1>Register</h1>
            <div>
                <label htmlFor="userName">Username</label>
                <Input
                    type={"text"}
                    name={"userName"}
                    onChange={onChangeHandler}
                    value={formInputs.userName}
                />
                {formErrors.userName && <p className="error-msg">{formErrors.userName}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Input
                    type={"email"}
                    name={"email"}
                    onChange={onChangeHandler}
                    value={formInputs.email}
                />
                <p className="error-msg">{formErrors.email}</p>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <Input
                    type={"password"}
                    name={"password"}
                    onChange={onChangeHandler}
                    value={formInputs.password}
                />
                <p className="error-msg">{formErrors.password}</p>
            </div>
            <div>
                <label htmlFor="cnf_pass">Confirm Password</label>
                <Input
                    type={"text"}
                    name={"confirmPassword"}
                    onChange={onChangeHandler}
                    value={formInputs.confirmPassword}
                    autoComplete = 'confirm-password'
                />
                <p className="error-msg">{formErrors.confirmPassword}</p>
            </div>
            <Button type={"submit"}>Register</Button>
            <div>
                <p>
                    Already a User? &nbsp;
                    <Link to={"/"}>Login</Link>
                </p>
            </div>
        </form>
    );
};

export default Register;
