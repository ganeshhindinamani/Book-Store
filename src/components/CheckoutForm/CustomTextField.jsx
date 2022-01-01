import React from "react";
import { TextField, Grid, InputLabel } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={() => <TextField fullWidth label={label} required />}
      />
      {/* <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
        error={isError}
      /> */}
      {/* <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      /> */}
    </Grid>
  );
};

export default FormInput;
