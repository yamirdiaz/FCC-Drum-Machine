import React from 'react'
import { HeaterView } from './features/heater/HeaterView'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const imgSrc = useSelector(state => state.heater.img)

  return (
    <>
      <h1 className="title">Drum Machine</h1>
      <img id="img-title" src={imgSrc}/>
      <HeaterView />
    </>
  )
}

export default App
