import React from "react";

import "./app-body.css";

interface IProps {
  quizComplete: boolean;
  numCorrect: number;
  questionNum: number;
  onStartClick: () => void;
}

export const AppBody: React.FC<IProps> = (props) => {
  const introText = "Hi, Anna! It's you from the past. How well do you remember our childhood? Let's take a little quiz and find out. You'll need to dig deep into the dusty memories of Super 18, the Sears Christmas catalog, and Toys 'R' Us. Ready?";
  const outroText = "You did it! You made it to the end of the quiz! Who cares how many you got right. You're 43 and grades don't matter anymore! Happy birthday!!";
  const { quizComplete, numCorrect, questionNum, onStartClick} = props;
  return (
    <>
      { quizComplete && <div className="done-label">{`${numCorrect} out of ${questionNum + 1} correct!`}</div> }
      <div className="intro-text">{quizComplete ? outroText : introText}</div>
      { !quizComplete && <button className="start-button" onClick={onStartClick}>{"START >"}</button>
      }
    </>
  );
}
