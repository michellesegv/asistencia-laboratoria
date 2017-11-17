import './base.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'
import ContainerForm from './components/ContainerForm'
import Header from './components/Header'
import Hour from './components/Hour'
import InputData from './components/InputData'
import store from './config/store'

const state = {
  page: 0
}

const App = () => {
  if(state.pages === 0) {
    return (
      <Provider store={store}>
        <div>
          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
          />

          <ContainerForm/>
          <Button
            assistance="login"
            text="Ingresar"
          />

        </div>
      </Provider>
    )
  } else {
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
  }
}
/*
const App = () => {
	if (state.pages == null) {
    return(
      <div>
        <Header
          src="http://i65.tinypic.com/2lwrbwx.png"
          alt="Laboratoria"
        />

        <ContainerForm/>
        <Button
          assistance="login"
          text="Ingresar"
        />

      </div>
    )
	} else if(state.pages === 1) {
    return (
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
    )
  }
};
*/


/*const App = () => {
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
}*/



/*render(
	<App />,
	document.getElementById('root')
)*/

/*const App = (_) => {
  return (
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
  )
}*/
/*const inputs = (_) => {
  return(
  <div>
	  <InputData
	    text="Email address"
	    typeInput="email"
	    id="emailUser"
	    placeholder="Email"
	  />
	  <InputData
	    text="Password"
	    typeInput="password"
	    id="passwordUser"
	    placeholder="Password"
	  />
  </div>
)}*/


render(
  <App />,
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
