import "./register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const Register = () => {
  //const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchPassword = watch("password");
  const handleUserData = (data) => {
    axios
      .post("http://localhost:3001/api/register", { data })
      .then(() => {
        alert("user registerd successfully");
        navigate("/login");
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(handleUserData)}>
        <input
          placeholder="firstName"
          autoFocus
          type="text"
          id="firstname"
          {...register("firstName", {
            required: "Please Enter firstname",
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input
          placeholder="lastName"
          type="text"
          id="lastname"
          {...register("lastName", {
            required: "please enter last name",
          })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <input
          placeholder="email"
          id="email"
          {...register("email", {
            required: "Email required",
            validate: (val) => {
              if (!val.includes("@")) return "email should have @ char";
            },
          })}
        />
        {errors.email && <span>{errors.email.message} </span>}
        <input
          placeholder="password"
          type="password"
          id="password"
          {...register("password", {
            required: "password required",
            minLength: {
              value: 8,
              message: "password must be at least 8 char",
            },
          })}
        />{" "}
        {errors.password && <span>{errors.password.message}</span>}
        <input
          placeholder="confirmPassword"
          type="password"
          id="confirmpassword"
          {...register("confirmpassword", {
            required: "password required",
            validate: (value) => {
              if (value !== watchPassword) return "Password do not match";
            },
          })}
        />
        {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
        <button>Create Account</button>
        <p>
          Do you already have an account?<Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
