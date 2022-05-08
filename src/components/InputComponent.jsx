import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";

const InputComponent = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};

export default InputComponent;
