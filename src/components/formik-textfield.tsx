import { useField } from "formik";
import React from "react";
import TextField from "@material-ui/core/TextField";

type TextFieldProps = {
  name: string;
};

const FormikTextField: React.FC<TextFieldProps> = (props) => {
  const [field] = useField(props);
  return <TextField {...field} />;
};

export default FormikTextField;
