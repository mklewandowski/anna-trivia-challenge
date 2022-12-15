import React, {useState}  from 'react';
import anna from "./anna.png";
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);

  const onStartClick = () => {
    setStarted(true);
  }

  return (
    <div className="App">
      <div className="app-shell">
        <header className="App-header">
          <img src={anna} width={"150px"} />
          Quiz Time With Anna
          <div className="app-header-sub">a time waster by therealmattkain</div>
        </header>
        {started
          ? <div>started</div>
          : <>
              <div className="intro-text">Ok, hot shot. It's you from the past. Let's take a little quiz and see how well you remember our childhood. You'll need to dig deep into the dusty memories of Super 18 (Milwaukee's Superstation), the Sears Christmas Catalog, and all things plastic. Or maybe it will be super easy. Are you ready?</div>
              <button className="start-button" onClick={onStartClick}>START</button>
            </>
        }
      </div>
    </div>
  );
}

export default App;
