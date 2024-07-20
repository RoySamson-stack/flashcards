import React, { useState } from 'react';

const QuizComponent = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('You have completed the quiz! Your score is ' + score);
    }
  };

  return (
    <div>
      <h2>{questions[currentQuestion].questionText}</h2>
      <div>
        {questions[currentQuestion].answerOptions.map((option) => (
          <button onClick={() => handleAnswerOptionClick(option.isCorrect)} key={option.answerText}>
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
