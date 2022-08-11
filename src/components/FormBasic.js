import React from "react";
import { useForm } from "react-hook-form";
const FormBasic = () => {
  const { register, handleSubmit } = useForm();
  const customSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Form Register</h2>
      <form className="form-react" onSubmit={handleSubmit(customSubmit)}>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="form-control">
          <label htmlFor="">Age</label>
          <input type="number" {...register("age")} />
        </div>
        <div className="form-control">
          <label htmlFor="">Country</label>
          <input type="text" {...register("country")} />
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export { FormBasic };
