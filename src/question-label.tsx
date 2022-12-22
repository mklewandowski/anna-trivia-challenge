import React from "react";

import "./question-label.css";

interface IProps {
  showQuestion: boolean;
  answerNum: number;
  numCorrect: number;
  questionNum: number;
  questionText: string;
}

export const QuestionLabel: React.FC<IProps> = (props) => {
  const { showQuestion, answerNum, numCorrect, questionNum, questionText } = props;
  return (
    <>
      {showQuestion
        ? <div className="question-label">{questionText}</div>
        : <div className="question-label">
            <span className="question-result">{`${answerNum === 0 ? "RIGHT!" : "WRONG!"}`}</span>
            <span className="question-result">{`${numCorrect} out of ${questionNum + 1} correct!`}</span>
          </div>
      }
    </>
  );
}
