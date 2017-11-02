/* Acá se creará componente para ingresar datos. Por ejemplo, el texto 'correo' y el input en donde se ingresará dicho dato. Será reutilizable tanto para el correo como para la contraseña */
import React from 'react'
import PropTypes from 'prop-types'

const ObtainData = ({ inputEmail, inputPassword }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <form>
          <div className='form-group'>
            <label htmlFor={inputEmail}>Email address</label>
            <input type='email' className='form-control' id={inputEmail} placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor={inputPassword}>Password</label>
            <input type='password' className='form-control' id={inputPassword} placeholder='Password' />
          </div>
        </form>
      </div>
    </div>
  )
};

ObtainData.propTypes = {
  inputEmail: PropTypes.string.isRequired,
  inputPassword: PropTypes.string.isRequired,
};

export default ObtainData