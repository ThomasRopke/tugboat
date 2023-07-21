import TextField, { BaseTextFieldProps } from '@mui/material/TextField'
import React from 'react'
import { Control, Controller, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form'

type FormTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  control: Control<TFieldValues>
  defaultValue?: FieldPathValue<TFieldValues, TName>
} & BaseTextFieldProps

const FormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  defaultValue,
  ...props
}: FormTextFieldProps<TFieldValues, TName>) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        helperText={error?.message}
        size="small"
        error={!!error}
        onChange={onChange}
        value={value}
        fullWidth
        variant="outlined"
        margin="normal"
        {...props}
      />
    )}
  />
)

export default FormTextField
