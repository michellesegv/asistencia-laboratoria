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

const App = (state) => {
  if(state.state.page === 0) {
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

render(
  <App state = {state} />,
  document.getElementById('root')
)
