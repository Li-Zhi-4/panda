import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Letter } from './components/Letter/Letter'
import { LetterForm } from './components/LetterForm/LetterForm'
import { Tabs } from './components/Tabs/Tabs'
import { SideNavigation } from './components/SideNavigation/SideNavigation'

function App() {

  return (
    <div className='box'>
      <LetterForm />
    </div>
  )
}

export default App
