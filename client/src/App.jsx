import './App.css'

import { Dashboard } from './components/layouts/Dashboard/Dashboard';
import { SideBar } from './components/widgets/SideBar/SideBar';
import { ToolBar } from './components/widgets/ToolBar/ToolBar';
import { Letter } from './components/Letter/Letter';

function App() {

  return (
    // <div className="container">
    //   <SideBar />
    //   <div className='box'>
    //     <ToolBar />
    //     <Dashboard />
    //   </div>
    // </div>
    <div className="box">
      <Letter id='1'/>
    </div>
  );
}

export default App
