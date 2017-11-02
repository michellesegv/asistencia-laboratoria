import React from 'react'
import Clock from 'react-live-clock'

const Hour = (_) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xs-8 col-xs-offset-2 col-md-2 col-md-offset-5 text-center'>
          <Clock className="hour" format={'HH:mm:ss'} ticking={true} timezone={'America/Lima'} />
        </div>
      </div>
    </div>
  )
};

export default Hour