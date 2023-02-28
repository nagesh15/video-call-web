import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import "./login-register.css";
import axios from "axios";
import UserContext from "../store/UserContext";

const Login = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
    let navigate = useNavigate();

    const initialState = {
        email: "",
        password: "",
    };

    //check if already logged in
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated]);

    const [formInputs, setFormInputs] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [accessToken, setAccessToken] = useState('');

    const onChangeHandler = (event) => {
        //get the name and value property of input field that generates the event
        const { name, value } = event.target;

        setFormInputs((formInputs) => ({
            ...formInputs,
            [name]: value,
        }));
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const errors = {};
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex =
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}/;

        //if email is not entered
        if (!formInputs.email) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(formInputs.email)) {
            errors.email = "Enter correct email format";
        }

        //if password is not entered
        if (!formInputs.password) {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(formInputs.password)) {
            errors.password = "Invalid Password";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        registrationApiCall();
    };

    const registrationApiCall = () => {
        axios
            .post(
                "http://localhost:4000/api/session/new",
                {
                    email: formInputs.email,
                    password: formInputs.password
                }
            )
            .then((response) => {
                //console.log(response);
                if (response.status === 201) {
                    setIsAuthenticated(true);
                    console.log(response.data.access_token);
                    setAccessToken(response.data.access_token);
                    

                    alert("Login Successfully");
                    console.log(accessToken);
                    setFormInputs(initialState);
                }
            })
            .catch((err) => {
                // if (err.response.status == 422) {
                //     alert("email already exists");
                // } else {
                    console.log(err);
                // }
            });
    };

    return (
        <form action="" className="container" onSubmit={formSubmitHandler}>
            <h1>Login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <Input
                    type={"text"}
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

            <Button type={"submit"}>Login</Button>
            <div>
                <p>
                    New User? &nbsp;
                    <Link to={"/register"}>Register</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;
