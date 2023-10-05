import { useState } from 'react'
import './App.css'
import Game from './components/game'
import cardArray from './modules/cards'

function App() {
  

  return (
    <>
      <Game cardArray={cardArray} />
    </>
  )
}

export default App
