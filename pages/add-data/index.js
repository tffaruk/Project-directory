import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const InputData = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // const result = await fetch("http://localhost:3000/", {
    //   method: "POST",
    //   headers: {
    //     Accepts: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    const result = await axios.post("http://localhost:3000/", data);
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="" {...register("title")} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default InputData;
