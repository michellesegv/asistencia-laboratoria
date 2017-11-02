import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const Button = ({ assistance, text }) => {
  return (
    <div className="row">
      <div className='col-xs-8 col-xs-offset-2 col-md-2 col-md-offset-5'>
        <button className={`button-assistance button-` + assistance}>{text}</button>
      </div>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button