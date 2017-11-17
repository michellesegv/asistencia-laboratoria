import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ name }) => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-xs-3 pull-right text-center'>
          <img src="https://image.flaticon.com/icons/png/128/149/149071.png" alt="profile"/>
          <p className='name-user'>Bienvenido: {name}</p>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Profile