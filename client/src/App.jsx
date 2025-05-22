import './App.css'

import { Letter } from './components/Letter/Letter'
import { LetterForm } from './components/LetterForm/LetterForm'
import { Tabs } from './components/Tabs/Tabs'
import { SideNavigation } from './components/SideNavigation/SideNavigation'
import { ActivityFeed } from './components/ActivityFeed/ActivityFeed'
import { DisplayLetter } from './layouts/DisplayLetter/DisplayLetter'


function App() {

  return (
    <div className='box'>
      <ActivityFeed />
    </div>
    // <DisplayLetter />
  )
}

export default App
