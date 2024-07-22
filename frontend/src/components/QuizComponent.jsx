import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/content/quizzes');
        if (response.data.length > 0) {
          setQuestions(response.data[0].questions);
        }
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

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
          <button
            onClick={() => handleAnswerOptionClick(option.isCorrect)}
            key={option.answerText}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
