import React, { useState, useEffect } from 'react';

const LetterReading = () => {
  const [letters, setLetters] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(0);
  const [testOver, setTestOver] = useState(false);

  useEffect(() => {
    const generatedLetters = Array.from({ length: 10 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    );
    setLetters(generatedLetters);
  }, []);

  const handleLetterSpoken = (spokenLetter) => {
    if (currentLetterIndex < letters.length) {
      const currentLetter = letters[currentLetterIndex];
      const isCorrect = spokenLetter.toUpperCase() === currentLetter;

      setResults(prevResults => [
        ...prevResults,
        { letter: currentLetter, spoken: spokenLetter, correct: isCorrect }
      ]);

      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }

      setCurrentLetterIndex(prevIndex => prevIndex + 1);

      if (currentLetterIndex === letters.length - 1) {
        setTestOver(true);
      }
    }
  };

  return (
    <div>
      <h1>Letter Reading Test</h1>
      {!testOver && letters.length > 0 && (
        <div>
          <h2>Current Letter: {letters[currentLetterIndex]}</h2>
          <p>Speak the letter you see</p>
          {/* Temporary button for testing */}
          <button onClick={() => handleLetterSpoken(prompt('Enter the letter:'))}>
            Simulate Speaking
          </button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Displayed Letter</th>
            <th>Spoken Input</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.letter}</td>
              <td>{result.spoken}</td>
              <td>{result.correct ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Score: {score} out of 10</h3>
      {testOver && <p>Test Over!</p>}
    </div>
  );
};

export default LetterReading;