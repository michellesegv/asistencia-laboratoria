import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const InputData = ({ text, typeInput, id, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input type={typeInput} id={id} placeholder={placeholder} className="form-control"/>
    </div>
  )
};

InputData.propTypes = {
  text: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default InputData


