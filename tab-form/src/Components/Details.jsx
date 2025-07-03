import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";

const Details = () => {
  const { setTabIndex, setDetails } = useContext(FormContext);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    setDetails((details) => ({ ...details, details: data }));
    setTabIndex((ind) => ind + 1);
  };

  return (
    <div>
      <h3>Details Form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Should have atleast 3 characters",
              },
            })}
          />
          {errors?.name && <span>{errors.name.message}</span>}
        </div>

        <div className="form-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            {...register("email", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Should have more than 8 characters",
              },
            })}
          />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>

        <div className="form-container">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", {
              required: "This field is required",
              min: {
                value: 18,
                message: "Should be greater than 18",
              },
            })}
          />
          {errors?.age && <span>{errors.age.message}</span>}
        </div>

        <div className="form-container">
          <span>Gender:</span>
          <section>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value={"male"}
                {...register("gender", {
                  required: "This field is required",
                })}
              />
              Male
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value={"female"}
                {...register("gender", {
                  required: "This field is required",
                })}
              />
              Female
            </label>

            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                value={"others"}
                {...register("gender", {
                  required: "This field is required",
                })}
              />
              Others
            </label>
          </section>
          {errors?.gender && <span>{errors.gender.message}</span>}
        </div>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Details;
