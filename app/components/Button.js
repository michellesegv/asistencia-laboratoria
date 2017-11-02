import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const Button = ({ assistance, text }) => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-xs-8 col-xs-offset-2 col-md-2 col-md-offset-5'>
          <button type="button" className={`btn btn-lg btn-block button-assistance button-` + assistance}>{text}</button>
        </div>
      </div>
    </div>
  )
}

Button.propTypes = {
  assistance: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Button