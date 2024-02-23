import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInputRadio = ({ label, fieldName, options, rules = {} }) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={fieldName}
        control={control}
        rules={rules}
        render={({
          field: { value, onChange, onBlur, ref, name },
          fieldState: { error },
        }) => (
          <>
            <RadioGroup
              value={value}
              onChange={(e) => onChange(e.target.value)}
              name={name}
            >
              {options.map((op) => (
                <FormControlLabel
                  value={op.value}
                  control={<Radio />}
                  label={op.label}
                  key={op.value}
                />
              ))}
            </RadioGroup>
            {error && (
              <Typography variant="body1" sx={{ color: "red" }}>
                {error.message}
              </Typography>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default FormInputRadio;
