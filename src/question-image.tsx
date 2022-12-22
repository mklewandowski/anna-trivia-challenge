import React from "react";

import "./question-image.css";

interface IProps {
  questionImage: any;
}

export const QuestionImage: React.FC<IProps> = (props) => {
  const { questionImage } = props;
  return (
    <div className="question-image-box">
      <img src={questionImage} width={"250px"} alt="question" />
    </div>
  );
}
