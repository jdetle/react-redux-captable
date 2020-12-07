import { useField } from "formik";
import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

type FormikTextFieldProps = {
  name: string;
} & TextFieldProps;

const FormikTextField: React.FC<FormikTextFieldProps> = (props) => {
  const [field] = useField(props);
  return <TextField {...field} {...props} />;
};

export default FormikTextField;
