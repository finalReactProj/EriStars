import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useRef, useState } from "react";

const Login = () => {
  const [userToLogin, setUserToLogin] = useState(true);
  const emailRef = useRef(null)
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handlelogin = (data) => {
    axios
      .post(
        "http://localhost:3001/api/login",
        { data },
        { withCredentials: true }
      )
      .then((result) => navigateTo("/"))
      .catch((err) => alert(err.response.data.message));
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    axios.post("http://localhost:3001/api/forgot-password", { email })
      .then(res => console.log(res.data.message))
    .catch(error=>console.log(error))
  };

  return (
    <div className="login">
      {userToLogin ? (
        <>
          <form onSubmit={handleSubmit(handlelogin)}>
            <h2>Log In</h2>
            <input
              autoFocus
              placeholder="Enter your Email"
              name=""
              id="email"
              {...register("email", {
                required: "email required",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              type="password"
              placeholder="Password"
              name=""
              id="password"
              {...register("password", {
                required: "password required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 char",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Remember me
            </label>
            <Link
              style={{ alignSelf: "start", marginLeft: "90px" }}
              onClick={() => setUserToLogin(false)}
            >
              forgot password?
            </Link>
            <button className="bg-gray-400 px-4 py-1 rounded">Login</button>
          </form>
          <div>
            <p>
              do not have an account?{" "}
              <Link to="/register"> Create Account</Link>
            </p>
          </div>
        </>
      ) : (
        <div className="forgot-password">
          <input
            autoFocus
            placeholder="Enter your Email"
            type="email"
              id="email"
              ref={emailRef}
          />
          <button
            className="bg-gray-400 px-4 py-1 rounded"
            onClick={handleForgotPassword}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
