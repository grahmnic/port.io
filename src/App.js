import React from 'react';
import './App.css';

// COMPONENTS
import StartView from './views/start.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: <StartView />
    };
  }


  render() {
    return (
      <div className="app-root">
        {this.state.view}
      </div>
    );
  }
}

export default App;
