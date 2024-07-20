import React, { useState } from 'react';

const QuizForm = ({ onSubmit }) => {
  const [questionText, setQuestionText] = useState('');
  const [answerOptions, setAnswerOptions] = useState([
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
  ]);

  const handleInputChange = (index, event) => {
    const newAnswerOptions = answerOptions.map((option, i) => {
      if (i === index) {
        return { ...option, [event.target.name]: event.target.value };
      }
      return option;
    });
    setAnswerOptions(newAnswerOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ questionText, answerOptions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      {answerOptions.map((option, index) => (
        <div key={index}>
          <label>Answer {index + 1}:</label>
          <input
            type="text"
            name="answerText"
            value={option.answerText}
            onChange={(e) => handleInputChange(index, e)}
          />
          <label>Correct:</label>
          <input
            type="checkbox"
            name="isCorrect"
            checked={option.isCorrect}
            onChange={(e) =>
              setAnswerOptions(
                answerOptions.map((opt, i) =>
                  i === index
                    ? { ...opt, isCorrect: e.target.checked }
                    : opt
                )
              )
            }
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;
