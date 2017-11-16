import './base.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Hour from './components/Hour'
import Button from './components/Button'
import ContainerForm from './components/ContainerForm'
import store from './config/store'

const App = () => {
	return (
		<Provider store={store}>
			<!-- Aquí debería ir el componente base -->
		</Provider>
	)
}

render(
	<App />,
	document.getElementById('root')
)

/*const App = (_) =>
(<div className="container-fluid padding-0">

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
)*/

/*const inputs = (_) => {
  return(
  <div>
	<InputData text="Email address" typeInput="email" id="emailUser" placeholder="Email" />
	<InputData text="Password" typeInput="password" id="passwordUser" placeholder="Password" />
  </div>
)}*/


/*render(
  <App />,
  document.getElementById('root')
)*/

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
