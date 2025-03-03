import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { myContext } from "../../App";

const ResetPass = () => {
    const url = useContext(myContext);
  const navigateTo=  useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const myPassword = watch("password");
    const [queryParam] = useSearchParams()
    const resetToken= queryParam.get("token")
    const submit = (data) => {
        axios
          .post(`${url}/api/reset-password`, {password: data.password,resetToken })
            .then((res) => { alert(res.data.message); navigateTo("/login") })
          .catch((error) => alert(error.response.data.message));
    }
  return (
    <form onSubmit={handleSubmit(submit)} className="login">
      <input
        type="password"
        placeholder="Password"
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
<br />
      <input
        type="password"
        placeholder="confirm password"
        id="confirm-password"
        {...register("confirmPassword", {
          required: "password required",
          validate: (value) => {
            if (value !== myPassword) {
              return "password doesn't match";
            }
          },
        })}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} <br />
      <button className="bg-gray-400 px-4 py-1 rounded">Reset </button>
    </form>
  );
};

export default ResetPass;
