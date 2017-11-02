import React from 'react'
import PropTypes from 'prop-types'
import InputData from './InputData'

const ContainerForm = (_) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">
          <form>
            <div className='form-group'>
              <InputData text="Email address" typeInput="email" id="emailUser" placeholder="Email" />
              <InputData text="Password" typeInput="password" id="passwordUser" placeholder="Password" />
            </div>
          </form> 
        </div>
      </div>
    </div>
  )
};

export default ContainerForm