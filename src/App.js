import React from 'react';
import './App.css';

// COMPONENTS
import StartView from './views/start.js';
import LoaderWindow from './components/loader-window/loader-window.js';
import Window from './components/window/window.js';

// CONTEXTS
import LoaderContext from './contexts/LoaderContext.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: <StartView />,
      loaders: []
    };
  }

  addLoader = (loader) => {
    loader.index = loader.title + this.state.loaders.length;
    this.setState({
      loaders: this.state.loaders.concat([loader])
    });
  }

  removeLoader = (index) => {
    this.setState({
      loaders: this.state.loaders.filter(x => x.index !== index)
    });
  }

  render() {
    const loaders = this.state.loaders.map(loader => 
      <Window key={loader.index} width={loader.width} height={loader.height} title={loader.title}>
          <LoaderWindow modules={loader.modules} length={loader.length} callback={this.removeLoader} index={loader.index}/>
      </Window>  
    );

    return (
      <div className="app-root">
        <div className="loaders-wrapper">
          {loaders}
        </div>
        <LoaderContext.Provider value={{
          createLoader: this.addLoader
        }}>
          {this.state.view}
        </LoaderContext.Provider>
      </div>
    );
  }
}

export default App;
