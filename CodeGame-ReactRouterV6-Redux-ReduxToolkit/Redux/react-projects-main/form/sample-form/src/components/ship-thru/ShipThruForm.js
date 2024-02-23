import React from "react";
import { Button, Container } from "../../globalStyles";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  Form,
  RemoveButton,
  ShipThruControl,
  ShipThruControlLabel,
  ShipThruInput,
  ShipThruInputContainer,
} from "./ShipThruForm.elements";

const ShipThruForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shipThru: [{ code: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "shipThru",
    control,
  });

  const validFormSubmissionHandler = (data) => {
    console.log("Valid Form:- ", data);
  };
  const invalidFormSubmissionHandler = (foundError) => {
    console.log("InValid Form:- ", foundError);
  };

  return (
    <Container>
      <Form
        noValidate
        onSubmit={handleSubmit(
          validFormSubmissionHandler,
          invalidFormSubmissionHandler
        )}
      >
        {fields.map((field, index) => (
          <ShipThruControl key={field.id}>
            <ShipThruControlLabel>Ship-Through Code</ShipThruControlLabel>
            <ShipThruInputContainer>
              <ShipThruInput
                type="text"
                {...register(`shipThru.${index}.code`, {
                  required: "this is a required field",
                  maxLength: {
                    value: 5,
                    message: "Ship Through ode has max length of 5 characters",
                  },
                })}
              />
              {index > 0 && (
                <RemoveButton onClick={() => remove(index)}>
                  Remove
                </RemoveButton>
              )}
            </ShipThruInputContainer>
            <p style={{ color: "red" }}>
              {errors.shipThru?.[index]?.code?.message}
            </p>
          </ShipThruControl>
        ))}
        {fields.length < 5 && (
          <Button type="button" onClick={() => append({ code: "" })}>
            Add another Ship-Through Code
          </Button>
        )}
        <Button type="submit">Submit</Button>
      </Form>
      <DevTool control={control} />
    </Container>
  );
};

export default ShipThruForm;
