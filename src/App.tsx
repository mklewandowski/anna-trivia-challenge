import React, {useState}  from 'react';
import anna from "./anna.png";
import strawShort from "./straw-short.jpeg";
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
        {started
          ? <>
              <div className="question-image-box">
                <img src={strawShort} width={"200px"} />
              </div>
              <div className="question-label">Who is this?</div>
              <div>
                <button className="answer-button">A1</button>
                <button className="answer-button">A2</button>
                <button className="answer-button">A3</button>
                <button className="answer-button">A4</button>
              </div>
          
            </>
          : <>
              <header className="intro-header">
                <img src={anna} width={"150px"} />
                Quiz Time With Anna
                <div className="intro-header-sub">a time waster by therealmattkain</div>
              </header>
              <div className="intro-text">Ok, hot shot. It's you from the past. Let's take a little quiz and see how well you remember our childhood. You'll need to dig deep into the dusty memories of Super 18 (Milwaukee's super station), the Sears Christmas catalog, and all things plastic. Or maybe it will be super easy. Are you ready?</div>
              <button className="start-button" onClick={onStartClick}>START</button>
            </>
        }
      </div>
    </div>
  );
}

export default App;
