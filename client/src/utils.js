import React from 'react';
import { TextField } from 'react-md/lib/TextFields';

export const renderTextField = ({
  field,
  form: { touched, errors },
  refCallback,
  ...others
}) => (
  <TextField
    {...field}
    {...others}
    ref={refCallback}
    onChange={(_, e) => field.onChange(e)}
    id={field.name}
  />
);
