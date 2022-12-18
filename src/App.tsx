import React, {useState}  from 'react';
import anna from "./anna.png";
import strawShort from "./straw-short.jpeg";
import { QuizQuestions } from "./utils";
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [answerNum, setAnswerNum] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const onStartClick = () => {
    setStarted(true);
  }

  const onAnswerClick = (userAnswerNum: number) => {
    setAnswerNum(userAnswerNum);
    setShowQuestion(false);
  }

  const onNextClick = () => {
    setQuestionNum(questionNum + 1);
    setShowQuestion(true);
  }

  return (
    <div className="app">
      <div className="app-shell">
        {started
          ? <>
              <div className="question-image-box">
                <img src={QuizQuestions[questionNum].image} width={"230px"} />
              </div>
              {showQuestion
                ? <div className="question-label">{QuizQuestions[questionNum].question}</div>
                : <div className="question-label">{answerNum} correct or incorrect</div>
              }
              <div className="button-container">
                <button className={`answer-button ${!showQuestion && answerNum === 0 ? "answer-correct" : ""}`} onClick={() => {onAnswerClick(0)}}>{QuizQuestions[questionNum].answers[0]}</button>
                <button className={`answer-button ${!showQuestion && answerNum === 1 ? "answer-incorrect" : ""}`} onClick={() => {onAnswerClick(1)}}>{QuizQuestions[questionNum].answers[1]}</button>
                <button className={`answer-button ${!showQuestion && answerNum === 2 ? "answer-incorrect" : ""}`} onClick={() => {onAnswerClick(2)}}>{QuizQuestions[questionNum].answers[2]}</button>
                <button className={`answer-button ${!showQuestion && answerNum === 3 ? "answer-incorrect" : ""}`} onClick={() => {onAnswerClick(3)}}>{QuizQuestions[questionNum].answers[3]}</button>
              </div>
              {!showQuestion && <button className="next-button" onClick={onNextClick}>{"next >"}</button>}
            </>
          : <>
              <header className="intro-header">
                <img src={anna} width={"150px"} />
                Quiz Time With Anna
                <div className="intro-header-sub">a time waster by therealmattkain</div>
              </header>
              <div className="intro-text">Ok, hot shot. It's you from the past. Let's take a little quiz and see how well you remember our childhood. You'll need to dig deep into the dusty memories of Super 18 (Milwaukee's super station), the Sears Christmas catalog, and all things plastic. Or maybe it will be super easy. Are you ready?</div>
              <button className="start-button" onClick={onStartClick}>Start...</button>
            </>
        }
      </div>
    </div>
  );
}

export default App;
