import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LetterViewer from './components/LetterViewer'
import { Letter } from './components/Letter/Letter'
import { LetterForm } from './components/LetterForm/LetterForm'

function App() {

  return (
    <div className='box'>
      <Letter id={30}/>
    </div>
  )
}

export default App
