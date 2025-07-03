import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";

const Hobbies = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { setTabIndex, setDetails } = useContext(FormContext);

  const onSubmit = (data) => {
    console.log(data);
    setTabIndex((index) => index + 1);
    setDetails((details) => ({ ...details, hobbies: data }));
  };

  return (
    <div>
      <h3>Hobbies Form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <span>Hobbies:</span>
          <div>
            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={"sports"}
                {...register("hobbies", {
                  required: "This field is required",
                })}
              />
              Sports
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={"read"}
                {...register("hobbies", {
                  required: "This field is required",
                })}
              />
              Read
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={"garden"}
                {...register("hobbies", {
                  required: "This field is required",
                })}
              />
              Garden
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={"trek"}
                {...register("hobbies", {
                  required: "This field is required",
                })}
              />
              Trek
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                value={"sleep"}
                {...register("hobbies", {
                  required: "This field is required",
                })}
              />
              Sleep
            </label>
          </div>
          {errors?.hobbies && <span>{errors.hobbies.message}</span>}
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Hobbies;
