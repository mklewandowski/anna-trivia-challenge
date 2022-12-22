import React, {useState}  from 'react';
import { AppHeader } from './app-header';
import { AppBody } from './app-body';
import { QuestionImage } from './question-image';
import { QuestionLabel } from './question-label';
import { QuizQuestions, shuffleArray } from "./utils";
import './app.css';

const kButtonNums: number[] = [0, 1, 2, 3];

function App() {
  const [quizRunning, setQuizRunning] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [quizOffset, setQuizOffset] = useState(0);
  const [answerNum, setAnswerNum] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const onStartClick = () => {
    shuffleArray(QuizQuestions);
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
        { !quizRunning
          ? <>
              <AppHeader />
              <AppBody
                quizComplete={quizComplete}
                numCorrect={numCorrect}
                questionNum={questionNum}
                onStartClick={onStartClick}
              />
            </>
          : <>
              <QuestionImage questionImage={QuizQuestions[questionNum].image} />
              <QuestionLabel
                showQuestion={showQuestion}
                answerNum={answerNum}
                numCorrect={numCorrect}
                questionNum={questionNum}
                questionText={QuizQuestions[questionNum].question}
              />
              <div className="button-container">
                { kButtonNums.map((buttonNum) =>
                  <button
                    className={`answer-button ${!showQuestion && ((buttonNum + quizOffset) % 4) === 0 ? "answer-correct" : ""} ${!showQuestion && answerNum !== 0 && ((buttonNum + quizOffset) % 4) === answerNum ? "answer-incorrect" : ""}`}
                    onClick={() => {onAnswerClick((buttonNum + quizOffset) % 4)}}
                    disabled={!showQuestion}
                    key={`button-${buttonNum}`}
                  >
                    {QuizQuestions[questionNum].answers[(buttonNum + quizOffset) % 4]}
                  </button>
                )}
              </div>
              {!showQuestion && <button className="next-button" onClick={onNextClick}>{"NEXT >"}</button>}
            </>
        }
      </div>
    </div>
  );
}

export default App;
