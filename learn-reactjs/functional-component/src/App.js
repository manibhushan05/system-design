import React from 'react';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'

const App = ()=>{
  return (
    <div className="App">
      {/* <Greet name='Mani' alias='Coder'>
        <p>Mani is genious</p>
      </Greet>
      <Greet name='Shikhar ' alias='Sales guy'/>
      <Greet name='Deepak ' alias ='Spiritual'/>
      <Welcome/> */}
      <Message/>
    </div>
  )
}

export default App;
