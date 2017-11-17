import React from 'react'
import PropTypes from 'prop-types'

const Success = ({user}) => {
  return (
    <div className='container-fluid'>
      <div className="row mg-20">
        <div className='col-xs-12 text-center'>
          <p className='hour'>Bienvenido!! {user}</p>
        </div>
      </div>
    </div>
  )
}

Success.propTypes = {
  user: PropTypes.string.isRequired,
};
export default Success