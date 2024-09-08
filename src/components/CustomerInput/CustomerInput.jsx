import React from 'react'
import "./CustomerInput.css";

const CustomerInput = (props) => {
  return (
    <div className={props?.active ? "customer_input_field active" : "customer_input_field"}>
      <label htmlFor={props?.name?.toLowerCase()}>{props?.name}</label>
      <select name={props?.name?.toLowerCase()} id={props?.name?.toLowerCase()}>
        <option value="">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  )
}

export default CustomerInput