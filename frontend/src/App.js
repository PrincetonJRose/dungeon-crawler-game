import React, { Component } from 'react';
import Player from './components/Player'

class App extends Component {
  constructor () {
    super ()
    this.state = {
    
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="App">
        {`Hi there!!!  <(^_^)>`}
        <Player />
      </div>
    )
  }
}

export default App;
