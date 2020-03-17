import React from 'react';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'

const App = ()=>{
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  )
}

export default App;
