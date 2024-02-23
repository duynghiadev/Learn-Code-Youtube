import React, { useState } from "react";
import { useForm } from "react-hook-form";

const containerStyle = {
  width: "100%",
  maxWidth: "900px",
  padding: "30px",
  marginInline: "auto",
};

const inputStyle = {
  width: "100%",
  padding: "5px 15px",
  fontSize: "16px",
  border: "none",
  outline: "none",
  background: "black",
  color: "white",
  border: "1px solid black",
  borderRadius: "5px",
  marginBottom: "20px",
};

const Controller = ({ name, control, render, register, rules }) => {
  const props = register(name, rules);
  return render({
    onChange: (e) => {
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      });
    },
    onBlur: props.onBlur,
    name: props.name,
  });
};

// assume this is something like MuiTextInput
const Input = (props) => {
  const [value, setValue] = useState(props.value || "");

  return (
    <input
      style={{ ...inputStyle }}
      placeholder="last name"
      name={props.name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
    />
  );
};

const SampleForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <>
      <div style={{ ...containerStyle }}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName")}
            style={{ ...inputStyle }}
            placeholder="first name"
          />

          <Controller
            name="lastName"
            register={register}
            control={control}
            rules={{
              required: {
                value: true,
                message: "last name is a required field",
              },
            }}
            render={(props) => <Input {...props} />}
          />
          <button type="submit" style={{ marginTop: "20px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SampleForm;
