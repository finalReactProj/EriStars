import axios from "axios";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit,formState:{errors} } = useForm();

    const submit = (data) => {
        axios.post("http//:localhost:3001/api/login",{data})
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">
          email:{" "}
          <input
            type="email"
            {...register("email", {
              required: "you must enter email",
            })}
          />
        </label>
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "password must be atleast 8 chars",
              },
              required: "you must enter password",
            })}
          />
        </label>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
        <button>login</button>
      </form>
      <Link to="/register" >Don't have an account?</Link>

    </div>
  );
}

export default Login