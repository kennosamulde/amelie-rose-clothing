import React from "react"

import { FormGroup, FormInputContainer, FormInputLabel } from "./form-input.styles."

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroup>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>{label}</FormInputLabel> : null}
  </FormGroup>
)

export default FormInput
