import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="animalType">Animal Species:</label>
        <input
          type="text"
          id="animalType"
          name="animalType"
          {...register("animalType", {
            required: "This is required",
          })}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
