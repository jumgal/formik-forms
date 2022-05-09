import React from "react";
import InputComponent from "./InputComponent";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextAreaComponent from "./TextAreaComponent";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
       return <InputComponent {...rest}/>
    case "textarea":
      return <TextAreaComponent {...rest}/>
    case "select":
      return <SelectComponent {...rest}/>
    case "radio":
      return <RadioComponent {...rest} />
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
