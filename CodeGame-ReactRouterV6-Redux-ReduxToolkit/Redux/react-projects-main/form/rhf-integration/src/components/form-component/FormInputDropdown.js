import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInputDropdown = ({
  label,
  fieldName,

  rules = {},
  options,
}) => {
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
            <Select
              autoWidth={true}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              error={!!error}
            >
              {options.map((op) => (
                <MenuItem key={op.value} value={op.value}>
                  {op.label}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <FormHelperText sx={{ color: "red" }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
