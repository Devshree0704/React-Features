import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";

const Settings = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { setDetails, details } = useContext(FormContext);

  const onSubmit = (data) => {
    setDetails((details) => ({ ...details, settings: data }));
  };

  console.log(details);

  return (
    <div>
      <h3>Settings Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              type="checkbox"
              {...register("consent", {
                required: "This field is required",
              })}
            />
            Aknowledge the consent
          </label>
          {errors?.consent && <span>{errors?.consent.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
