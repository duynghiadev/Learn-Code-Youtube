import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInputText = ({ label, fieldName, rules = {} }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={rules}
      defaultValue=""
      render={({
        field: { value, onChange, onBlur, name, ref },
        fieldState: { error },
      }) => (
        <TextField
          name={name}
          label={label}
          variant="outlined"
          value={value}
          fullWidth
          onChange={(e) => onChange(e.target.value.toUpperCase())}
          sx={{ marginBottom: 2 }}
          onBlur={onBlur}
          ref={ref}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default FormInputText;
