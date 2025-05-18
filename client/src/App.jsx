import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Letter } from './components/Letter/Letter'
import { LetterForm } from './components/LetterForm/LetterForm'
import { Tabs } from './components/Tabs/Tabs'

function App() {

  return (
    <div className='box'>
      <Tabs />
      <Letter id={30}/>
    </div>
  )
}

export default App
