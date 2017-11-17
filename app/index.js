import './base.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'
import ContainerForm from './components/ContainerForm'
import Course from './components/Course'
import Header from './components/Header'
import Hour from './components/Hour'
import InputData from './components/InputData'
import LogOut from './components/LogOut'
import Message from './components/Message'
import Profile from './components/Profile'
import Success from './components/Success'
import store from './config/store'

const state = {
  page: 0
}


const App = () => {

   if(state.page === 0) {

    return (
      <Provider store={store}>
        <div>
          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            idHd='Principal'
            />
          <ContainerForm/>
          <Button
            assistance="present"
            text="Ingresar"
            idBtn='#page-2'
            />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            idHd='page-2'
          />
          <Success
            user='Kenneth'
          />
          <Button
            assistance="present"
            text="Marca tu asistencia"
            idBtn='#page-3'
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            idHd='page-3'
          />
          <Course/>
          <Message/>
          <Button
            assistance="miss"
            text="Entiendo"
            idBtn='#page-4'
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            idHd='page-4'
          />
          <Profile
            name='Kenneth'
          />
          <Hour/>
          <Button
            assistance="present"
            text="Presente! :)"
            idBtn='#page-5'
          />
          <Button
            assistance="miss"
            text="Voy a faltar :("
            idBtn='#page-5'
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            idHd='page-5'
          />
          <LogOut/>
          <Button
            assistance="present"
            text="Ingresa de nuevo"
            idBtn='#Principal'
          />

        </div>




      </Provider>
    );

  } /*else if (state.page === 1) {
     console.log(state.page);
    return (
      <Provider store={store}>
        <div className="container-fluid padding-0">

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            />
          <Hour/>

          <Button
            assistance="present"
            text="Presente! :)"
            />
          <Button
            assistance="miss"
            text="Voy a faltar :("
            />

        </div>
      </Provider>
    )
  } else {
     return (
       <Provider store={store}>
         <div>
           <Header
             src="http://i65.tinypic.com/2lwrbwx.png"
             alt="Laboratoria"
           />

           <LogOut/>

           <Button
             assistance="present"
             text="Ingresa de nuevo"
           />


         </div>
       </Provider>
     )
  }*/
}

render(
  <App state = {state} />,
  document.getElementById('root')
)


/* Para pintar asistencia */

/*
	<Header
	  src="http://i65.tinypic.com/2lwrbwx.png"
	  alt="Laboratoria"
	  />
	<Hour/>

	<Button
	  assistance="present"
	  text="Presente! :)"
	  />
	<Button
	  assistance="miss"
	  text="Voy a faltar :("
	  />
*/

/* Para pintar registro */
/*
<Header
	  src="http://i65.tinypic.com/2lwrbwx.png"
	  alt="Laboratoria"
	  />

	<ContainerForm>

	</ContainerForm>
*/


/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/

