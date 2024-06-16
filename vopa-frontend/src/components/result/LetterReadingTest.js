import React, { useState, useEffect } from 'react';
import letterData from './letterData.json';

const LetterReadingTest = () => {
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [testComplete, setTestComplete] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    setLetters(letterData.letters);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentIndex >= letters.length) return;

    const currentLetter = letters[currentIndex];
    const isCorrect = userInput.trim().toUpperCase() === currentLetter.answer.toUpperCase();

    setResults(prevResults => [
      ...prevResults,
      { 
        question: currentLetter.question, 
        answer: currentLetter.answer,
        userInput: userInput.trim().toUpperCase(), 
        correct: isCorrect 
      }
    ]);

    setUserInput('');

    if (currentIndex < letters.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setTestComplete(true);
    }
  };

  const renderTest = () => (
    <div>
      <h2>Current Letter: {letters[currentIndex].question}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          maxLength="1" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  const renderResults = () => (
    <div>
      <h2>Test Results</h2>
      <table>
        <thead>
          <tr>
            <th>Displayed Letter</th>
            <th>Correct Answer</th>
            <th>Your Input</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.question}</td>
              <td>{result.answer}</td>
              <td>{result.userInput}</td>
              <td>{result.correct ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Score: {results.filter(r => r.correct).length} out of {letters.length}</h3>
    </div>
  );

  return (
    <div>
      <h1>Letter Reading Test</h1>
      {!testComplete ? renderTest() : renderResults()}
    </div>
  );
};

export default LetterReadingTest;