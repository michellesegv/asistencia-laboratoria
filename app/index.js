import './styles/base.css'
import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import ObtainData from './components/ObtainData'
import Hour from './components/Hour'
import Button from './components/Button'

/* Acá se creará todo el contenido */
const App = () => (
  <Header
    src="http://i65.tinypic.com/2lwrbwx.png"
    alt="Laboratoria"
  />
)

render(
  <App/>,
  document.getElementById('root')
)