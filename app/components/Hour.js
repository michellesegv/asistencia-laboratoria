/* Acá se creará el componente de la hora */
import React from 'react'
import PropTypes from 'prop-types'

const Hour = ({ city, hours, minutes }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-6 col-md-3 col-lg-2'>
          <h2>{city}</h2>
          <p><span>{hours}</span><span>:</span><span>{minutes}</span></p>
        </div>
      </div>
    </div>
  )
};

Hour.propTypes = {
  city: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired
};

export default Hour