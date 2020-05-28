import React from 'react';
import './App.css';

// COMPONENTS
import Window from './components/window/window.js';
import Banner from './components/banner/banner.js';
import Taskbar from './components/taskbar/taskbar.js';
import IntroWindow from './components/intro-window/intro-window.js';

function App() {
  return (
    <div className="root">
      <Taskbar />
      <div className="header">
        <Banner />
      </div>
      <div className="body">
        <Window 
          width="80%" 
          height="30rem"
          title="Portfolio.exe">
          <IntroWindow />
        </Window>
      </div>

      <div className="footer">
      </div>

      {/* <div className="header">
      </div>
      <div className="content">
      </div>
      <div className="footer">
      </div> */}
    </div>
  );
}

export default App;
