import React from 'react';
import './App.css';
import CounterButton from './components/Lesson'
import HandlingEvents from './components/HandlingEvents'
import ConditionalRendering from './components/ConditionalRendering'
import Form from './components/Form'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <CounterButton/>
        <HandlingEvents/><br></br>
        <ConditionalRendering/>
        <Form />
      </div>
    )
  }
}

export default App