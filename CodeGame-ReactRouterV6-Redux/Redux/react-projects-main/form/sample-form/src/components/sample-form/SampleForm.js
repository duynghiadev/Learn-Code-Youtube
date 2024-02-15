import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button, Container } from "../../globalStyles";
import {
  FormTitle,
  Form,
  FormControl,
  FormLabel,
  FormTextInput,
  FormError,
  FormFieldControl,
  RemoveFieldButton,
  FormFieldContainer,
  ButtonContainer,
} from "./SampleForm.elements";

let numberOfTimeRender = 0;

const SampleForm = () => {
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitSuccessful },
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    trigger,
  } = useForm({
    defaultValues: {
      username: "test-user",
    },
    mode: "onSubmit",
  });

  const { fields, append, remove } = useFieldArray({
    name: "visited",
    control,
  });

  numberOfTimeRender++;

  // const username = watch("username");

  // useEffect(() => {
  //   console.log("I am running effect with value :- ", username);
  // }, [username]);

  const validFormSubmissionHandler = (data) => {
    console.log("submitted data:- ", data);
  };

  const invalidFormSubmissionHandler = (errorFound) => {
    console.log(
      "Errors found on form submission as for is invalid:- ",
      errorFound
    );
  };

  const handleSetUserNameValue = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const handleGetValues = () => {
    console.log(getValues());
    console.log(getValues(["username", "address"]));
    console.log(getValues("address.city"));
    console.log(getValues("visited.0.place"));
  };

  return (
    <>
      <Container>
        <FormTitle>Sample Form {numberOfTimeRender / 2}</FormTitle>
        <Form
          onSubmit={handleSubmit(
            validFormSubmissionHandler,
            invalidFormSubmissionHandler
          )}
          noValidate
        >
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormTextInput
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            <FormError>{errors.username?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormTextInput
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Inavlid Email format",
                },
                required: {
                  value: true,
                  message: "Email is required",
                },
                validate: {
                  admin: (fieldValue) => {
                    return (
                      !fieldValue.toLowerCase().includes("admin") ||
                      "Admin email id is not allowed"
                    );
                  },
                  badDomain: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("@test.com") ||
                      "This email domain is unsupported"
                    );
                  },
                  isEmailAlreadyRegistered: async (fieldvalue) => {
                    const response = await fetch(
                      `https://jsonplaceholder.typicode.com/users?email=${fieldvalue}`
                    );
                    const data = await response.json();
                    return data.length === 0 || "Email is already registered";
                  },
                },
              })}
            />
            <FormError>{errors.email?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="channel">Channel</FormLabel>
            <FormTextInput
              type="text"
              id="channel"
              {...register("channel", {
                required: {
                  value: true,
                  message: "Channel is a required",
                },
              })}
            />
            <FormError>{errors.channel?.message}</FormError>
          </FormControl>

          {/* address field which is a nested object */}

          <FormControl>
            <FormLabel htmlFor="street">Street</FormLabel>
            <FormTextInput
              type="text"
              id="street"
              {...register("address.street", {
                required: {
                  value: true,
                  message: "Street is a required",
                },
              })}
            />
            <FormError>{errors.address?.street?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <FormTextInput
              type="text"
              id="city"
              {...register("address.city", {
                required: {
                  value: true,
                  message: "city is a required",
                },
              })}
            />
            <FormError>{errors.address?.city?.message}</FormError>
          </FormControl>

          {/* Phone number is an array */}
          <FormControl>
            <FormLabel htmlFor="primary-phone">Primary Phone Number</FormLabel>
            <FormTextInput
              type="text"
              id="primary-phone"
              {...register("phoneNumbers.0", {
                required: {
                  value: true,
                  message: "Primary phone number is required",
                },
              })}
            />
            <FormError>{errors.phoneNumbers?.[0]?.message}</FormError>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="sec-phone">Secondary Phone Number</FormLabel>
            <FormTextInput
              type="text"
              id="sec-phone"
              {...register("phoneNumbers.1", {
                required: {
                  value: true,
                  message: "Secondary phone number is required",
                },
              })}
            />
            <FormError>{errors.phoneNumbers?.[1]?.message}</FormError>
          </FormControl>

          {/* Dynamic fields array */}
          <FormControl>
            <FormLabel>List of Places Visited</FormLabel>

            {fields.map((field, index) => (
              <FormFieldContainer key={field.id}>
                <FormFieldControl>
                  <FormLabel htmlFor={`visited.${index}.place`}>
                    Place
                  </FormLabel>
                  <FormTextInput
                    id={`visited.${index}.place`}
                    {...register(`visited.${index}.place`, {
                      required: "Place is a required field",
                    })}
                  />
                </FormFieldControl>
                <FormFieldControl>
                  <FormLabel htmlFor={`visited.${index}.city`}>City</FormLabel>
                  <FormTextInput
                    id={`visited.${index}.city`}
                    {...register(`visited.${index}.city`)}
                  />
                </FormFieldControl>
                <FormFieldControl>
                  <FormLabel htmlFor={`visited.${index}.country`}>
                    Country
                  </FormLabel>
                  <FormTextInput
                    id={`visited.${index}.country`}
                    {...register(`visited.${index}.country`, {
                      required: "Country is a required field",
                    })}
                  />
                </FormFieldControl>
                {index > 0 && (
                  <RemoveFieldButton
                    type="button"
                    onClick={() => remove(index)}
                  >
                    Remove Place
                  </RemoveFieldButton>
                )}
              </FormFieldContainer>
            ))}
            <Button
              type="button"
              onClick={() => append({ city: "", place: "", country: "" })}
            >
              Add Place
            </Button>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="age">Age</FormLabel>
            <FormTextInput
              id="age"
              type="number"
              {...register("age", {
                valueAsNumber: true,
                required: "Age is a required field",
                min: {
                  value: 0,
                  message: "Age cannot be negative",
                },
              })}
            />
            <FormError>{errors.age?.message}</FormError>
          </FormControl>

          <ButtonContainer>
            <Button $primary type="submit">
              Submit
            </Button>
            <Button type="button" onClick={handleSetUserNameValue}>
              SetUserName
            </Button>
            <Button type="button" onClick={handleGetValues}>
              GetData
            </Button>
            <Button
              type="button"
              onClick={() => {
                trigger(["address.street", "address.city"]);
              }}
            >
              Validate
            </Button>
          </ButtonContainer>
        </Form>
        <DevTool control={control} />
      </Container>
    </>
  );
};

export default SampleForm;
