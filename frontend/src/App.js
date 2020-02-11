import React, { Component } from 'react';
import DrawPlayerCharacter from './components/characters/DrawPlayerCharacter'
import World1 from './components/worlds/world1'

class App extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <div className="App">
        <World1 />
        <DrawPlayerCharacter />
      </div>
    )
  }
}

export default App;
