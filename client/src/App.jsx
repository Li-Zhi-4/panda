import './App.css'

import { Widget } from './components/ui/Widget/Widget'


function App() {

  return (
    <div className='box'>
      <Widget theme='light-theme' title='Title of Widget'>
        <p>Content of Widget goes here...</p>
      </Widget>
    </div>
  );
}

export default App
