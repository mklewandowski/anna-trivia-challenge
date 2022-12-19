import React, {useState}  from 'react';
import anna from "./anna.png";
import { QuizQuestions } from "./utils";
import './App.css';

function App() {
  const [quizRunning, setQuizRunning] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [quizOffset, setQuizOffset] = useState(0);
  const [answerNum, setAnswerNum] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const introText = "Ok, hot shot. It's you from the past. Let's take a little quiz and see how well you remember our childhood. You'll need to dig deep into the dusty memories of Super 18 (Milwaukee's super station), the Sears Christmas catalog, and Toys 'R' Us. Or maybe it will be super easy. Are you ready?";
  const outroText = "You did it! You made it to the end of the quiz! Happy birthday and thanks for playing!";

  const onStartClick = () => {
    setQuizRunning(true);
    const randNum = Math.floor(Math.random() * 4);
    setQuizOffset(randNum);
  }

  const onAnswerClick = (userAnswerNum: number) => {
    setAnswerNum(userAnswerNum);
    if (userAnswerNum === 0)
      setNumCorrect(numCorrect + 1);
    setShowQuestion(false);
  }

  const onNextClick = () => {
    if (questionNum === QuizQuestions.length - 1) {
      setQuizComplete(true);
      setQuizRunning(false);
    } else {
      setQuizOffset(Math.floor(Math.random() * 4));
      setQuestionNum(questionNum + 1);
      setShowQuestion(true);
    }
  }

  return (
    <div className="app">
      <div className="app-shell">
        { quizRunning
          ? <>
              <div className="question-image-box">
                <img src={QuizQuestions[questionNum].image} width={"250px"} />
              </div>
              {showQuestion
                ? <div className="question-label">{QuizQuestions[questionNum].question}</div>
                : <div className="question-label">{`${numCorrect} out of ${questionNum + 1} correct!`}</div>
              }
              <div className="button-container">
                <button
                  className={`answer-button ${!showQuestion && ((0 + quizOffset) % 4) === 0 ? "answer-correct" : ""} ${!showQuestion && answerNum !== 0 && ((0 + quizOffset) % 4) === answerNum ? "answer-incorrect" : ""}`}
                  onClick={() => {onAnswerClick((0 + quizOffset) % 4)}}
                  disabled={!showQuestion}
                >
                  {QuizQuestions[questionNum].answers[(0 + quizOffset) % 4]}
                </button>
                <button
                  className={`answer-button ${!showQuestion && ((1 + quizOffset) % 4) === 0 ? "answer-correct" : ""} ${!showQuestion && answerNum !== 0 && ((1 + quizOffset) % 4) === answerNum ? "answer-incorrect" : ""}`}
                  onClick={() => {onAnswerClick((1 + quizOffset) % 4)}}
                  disabled={!showQuestion}
                >
                  {QuizQuestions[questionNum].answers[(1 + quizOffset) % 4]}
                </button>
                <button
                  className={`answer-button ${!showQuestion && ((2 + quizOffset) % 4) === 0 ? "answer-correct" : ""} ${!showQuestion && answerNum !== 0 && ((2 + quizOffset) % 4) === answerNum ? "answer-incorrect" : ""}`}
                  onClick={() => {onAnswerClick((2 + quizOffset) % 4)}}
                  disabled={!showQuestion}
                >
                  {QuizQuestions[questionNum].answers[(2 + quizOffset) % 4]}
                </button>
                <button
                  className={`answer-button ${!showQuestion && ((3 + quizOffset) % 4) === 0 ? "answer-correct" : ""} ${!showQuestion && answerNum !== 0 && ((3 + quizOffset) % 4) === answerNum ? "answer-incorrect" : ""}`}
                  onClick={() => {onAnswerClick((3 + quizOffset) % 4)}}
                  disabled={!showQuestion}
                >
                  {QuizQuestions[questionNum].answers[(3 + quizOffset) % 4]}
                </button>
              </div>
              {!showQuestion && <button className="next-button" onClick={onNextClick}>{"next >"}</button>}
            </>
          : <>
              <header className="intro-header">
                <img src={anna} width={"150px"} />
                Quiz Time With Anna
                <div className="intro-header-sub">a time waster by therealmattkain</div>
              </header>
              <div className="intro-text">{quizComplete ? outroText : introText}</div>
              { quizComplete
                ? <div>{`${numCorrect} out of ${questionNum + 1} correct!`}</div>
                : <button className="start-button" onClick={onStartClick}>Start...</button>
              }
            </>
        }
      </div>
    </div>
  );
}

export default App;
