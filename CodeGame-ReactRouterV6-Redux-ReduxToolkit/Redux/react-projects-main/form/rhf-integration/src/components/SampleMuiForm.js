import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import {
  checkboxOptions,
  countries,
  generateRequiredRule,
  radioOptions,
  sliderMarks,
} from "../utils";
import {
  FormInputText,
  FormInputDropdown,
  FormInputRadio,
  FormInputCheckboxGroup,
  FormInputSlider,
} from "./form-component";

const steps = ["Personal Information", "Tourist Places", "Preferences"];

const SampleMuiForm = () => {
  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      country: "",
      placesToVisit: [],
      gender: "",
      temperature: 0,
    },
  });

  const [activeStep, setActiveStep] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    setActiveStep((a) => a + 1);
  };

  const onSubmitInvalidData = (errors) => {
    console.log("Errors:- ", errors);
  };

  const isActiveStepFailed = () => {
    return Object.keys(methods.formState.errors).length > 0;
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        margin={2}
        onSubmit={methods.handleSubmit(onSubmit, onSubmitInvalidData)}
      >
        {/* Stepper at the top */}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const labelProps = {};
            if (isActiveStepFailed() && activeStep === index) {
              labelProps.error = true;
            }
            return (
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === 0 && (
          <>
            {/* first name */}
            <FormInputText
              fieldName={"firstname"}
              label={"First Name"}
              rules={generateRequiredRule("First name")}
            />

            {/* last name */}
            <FormInputText
              fieldName={"lastname"}
              label={"Last Name"}
              rules={generateRequiredRule("Last name")}
            />

            {/* radio gender */}
            <Box>
              <FormInputRadio
                fieldName={"gender"}
                label={"Gender"}
                options={radioOptions}
                rules={generateRequiredRule("Gender")}
              />
            </Box>
          </>
        )}

        {activeStep === 1 && (
          <>
            {/* country select */}
            <FormInputDropdown
              fieldName={"country"}
              options={countries}
              label={"Slect a country"}
              rules={generateRequiredRule("Country")}
            />

            {/* checkbox places to visit */}

            <Box>
              <FormInputCheckboxGroup
                fieldName={"placesToVisit"}
                label={"Places to visit"}
                options={checkboxOptions}
                rules={generateRequiredRule("Places to visit")}
              />
            </Box>
          </>
        )}

        {activeStep === 2 && (
          // Slider tempertaure
          <Box>
            <FormInputSlider
              label={"Select tempertatur of tourist attarction preferrable"}
              fieldName={"temperature"}
              sliderMarks={sliderMarks}
              rules={generateRequiredRule("Temperature")}
            />
          </Box>
        )}

        {/* Prev Next buttons */}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          sx={{ marginTop: "3rem" }}
        >
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((a) => a - 1)}
            type="button"
          >
            Prev
          </Button>

          <Button variant="contained" color="info" type="submit">
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default SampleMuiForm;
