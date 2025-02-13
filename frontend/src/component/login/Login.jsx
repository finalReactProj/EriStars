import axios from "axios";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const handlelogin = (data) => {
        axios.post("http://localhost:3001/api/login", { data })
            .then((result) => console.log(result))
      .catch((err) => alert(err.data));
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(handlelogin)}>
        <h2>Log In</h2>
        <input
          autoFocus
          placeholder="Enter your Email"
          name=""
          id="email"
          {...register("email", {
            required: "email required"
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
       <button className="bg-gray-400 px-4 py-1 rounded" >Login</button>
      </form>
      <div>
        <p>
          do not have an account? <Link to="/register"> Create Account</Link>
        </p>
        {/* <Link to="/forgot"> Forgot password</Link> */}
      </div>
    </div>
  );
};

export default Login;
