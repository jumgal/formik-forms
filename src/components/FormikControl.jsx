import React from "react";
import InputComponent from "./InputComponent";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  console.log(props)

  switch (control) {
    case "input":
       return <InputComponent {...rest}/>
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
