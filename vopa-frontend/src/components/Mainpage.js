import React, { useState } from 'react';
import Speachtext from './Speachtext';
import Question from './Question';
import ResultTable from './Resulttable'; // Import ResultTable component
import './Mainpage.css'; // Import the CSS file for styling


export default function Mainpage() {
  const [currentLevel, setCurrentLevel] = useState(1); // State to track the current level
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State to track the current question index
  const [answers, setAnswers] = useState([]); // State to store answers
  const [isLevelComplete, setIsLevelComplete] = useState(false); // State to track level completion

  const questiondata = {
    "level1": [
      {"id": 1, "question": "A"},
      {"id": 2, "question": "B"},
      {"id": 3, "question": "C"},
      {"id": 4, "question": "D"},
      {"id": 5, "question": "E"},
      {"id": 6, "question": "F"},
      {"id": 7, "question": "G"},
      {"id": 8, "question": "H"},
      {"id": 9, "question": "I"},
      {"id": 10, "question": "J"}
    ],
    "level2": [
      {"id": 1, "question": "Apple"},
      {"id": 2, "question": "Banana"},
      {"id": 3, "question": "Cherry"},
      {"id": 4, "question": "Date"},
      {"id": 5, "question": "Elderberry"},
      {"id": 6, "question": "Fig"},
      {"id": 7, "question": "Grape"},
      {"id": 8, "question": "Honeydew"},
      {"id": 9, "question": "Indian Fig"},
      {"id": 10, "question": "Jackfruit"}
    ],
    "level3": [
      {"id": 1, "question": "The quick brown fox jumps over the lazy dog."},
      {"id": 2, "question": "She sells sea shells by the sea shore."},
      {"id": 3, "question": "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"},
      {"id": 4, "question": "Peter Piper picked a peck of pickled peppers."},
      {"id": 5, "question": "A quick movement of the enemy will jeopardize six gunboats."},
      {"id": 6, "question": "The five boxing wizards jump quickly."},
      {"id": 7, "question": "Bright vixens jump; dozy fowl quack."},  
      {"id": 8, "question": "Jackdaws love my big sphinx of quartz."},
      {"id": 9, "question": "Pack my box with five dozen liquor jugs."},
      {"id": 10, "question": "The quick onyx goblin jumps over the lazy dwarf."} 
    ]
  };

  const handleNextQuestion = (transcript) => {
    const currentQuestion = questiondata[`level${currentLevel}`][currentQuestionIndex];
    const isCorrect = transcript.trim().toLowerCase() === currentQuestion.question.trim().toLowerCase();

    setAnswers(prevAnswers => [
      ...prevAnswers,
      { question: currentQuestion.question, userAnswer: transcript, isCorrect }
    ]);

    if (currentQuestionIndex < questiondata[`level${currentLevel}`].length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsLevelComplete(true); // Set level as complete
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < 3) {
      setCurrentLevel(prevLevel => prevLevel + 1);
      setCurrentQuestionIndex(0);
      setIsLevelComplete(false); // Reset level completion state
      setAnswers([]); // Reset answers for the new level
    }
  };

  return (
    <div className="container">
      {isLevelComplete ? (
        <div className="result-container">
          <ResultTable answers={answers} /> {/* Show results */}
          {currentLevel < 3 ? (
            <button onClick={handleNextLevel}>Proceed to Level {currentLevel + 1}</button>
          ) : (
            <p>All levels completed!</p>
          )}
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questiondata[`level${currentLevel}`][currentQuestionIndex].question}</p>
          <div className="speech-text">
            <Speachtext onNext={handleNextQuestion} />
          </div>
        </div>
      )}
    </div>
  );
}
