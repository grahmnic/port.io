import React from 'react';
import './App.css';

// COMPONENTS
import LoaderWindow from './components/loader-window/loader-window.js';
import Window from './components/window/window.js';

// VIEWS
import StartView from './views/start.js';

// CONTEXTS
import LoaderContext from './contexts/LoaderContext.js';
import ViewContext from './contexts/ViewContext.js';
import LoaderViewCombined from './contexts/LoaderViewCombined.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: <StartView />,
      loaders: []
    };
  }

  changeView = (view) => {
    this.setState({
      view: view
    });
  }

  addLoader = (loader) => {
    loader.index = loader.title + this.state.loaders.length;
    this.setState({
      loaders: this.state.loaders.concat([loader])
    });
  }

  removeLoader = (index) => {
    console.log("REMOVEING");
    this.setState({
      loaders: this.state.loaders.filter(x => x.index !== index)
    });
  }

  render() {
    const loaders = this.state.loaders.map(loader => 
      <Window key={loader.index} width={loader.width} height={loader.height} title={loader.title}>
          <LoaderWindow modules={loader.modules} length={loader.length} callback={loader.callback} index={loader.index}/>
      </Window>  
    );

    return (
      <div className="app-root">
        <div className="loaders-wrapper">
          {loaders}
        </div>
        <ViewContext.Provider value={{
          changeView: this.changeView
        }}>
          <LoaderContext.Provider value={{
            createLoader: this.addLoader,
            removeLoader: this.removeLoader
          }}>
            <LoaderViewCombined>
              {this.state.view}
            </LoaderViewCombined>
          </LoaderContext.Provider>
        </ViewContext.Provider>
      </div>
    );
  }
}

export default App;
