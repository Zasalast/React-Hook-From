import React from "react";
import { useForm } from "react-hook-form";
function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2> Form Validation</h2>
      <form className="form-react" onSubmit={handleSubmit(customSubmit)}>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 5 })}
          />
          {errors.name?.type === "required" && (
            <span className="fail">This field is required</span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className="fail">This field is max 5</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Age</label>
          <input type="number" {...register("age", { required: true })} />
          {errors.age && <span className="fail">This field is required</span>}
        </div>
        <div className="form-control">
          <label htmlFor="">Country</label>
          <input
            type="text"
            {...register("country", {
              required: { value: true, message: "valor requerido" },
            })}
          />
          {errors.country && (
            <span className="fail">{errors.country.message}</span>
          )}
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export { FormValidation };
