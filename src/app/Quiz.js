'use client';

import React, { useState } from 'react';
import quizData from './quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      {showScore ? (
        <div className='text-xl font-bold'>
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <div className='bg-white shadow-lg p-6 rounded-lg w-96 text-center'>
          <div className='text-lg font-semibold mb-4'>
            Question {currentQuestion + 1} / {quizData.length}
          </div>
          <div className='mb-4 text-lg'>{quizData[currentQuestion].question}</div>
          <div className='grid grid-cols-1 gap-2'>
            {quizData[currentQuestion].options.map((option) => (
              <button 
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className={`px-4 py-2 rounded-lg transition ${selectedAnswer === option ? (isCorrect ? 'bg-green-400' : 'bg-red-400') : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div className='mt-4 text-lg font-medium'>
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
