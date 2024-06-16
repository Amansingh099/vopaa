import React, { useState } from 'react';
import LettersTable from './LettersTable';
import WordsTable from './WordsTable';
import SentencesTable from './SentencesTable';
import ParagraphsTable from './ParagraphsTable';
import InitialPage from './InitialPage';
import FinalPage from './FinalPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { calculatePercentage } from './utils';

function Result() {
  const [currentLevel, setCurrentLevel] = useState(0); // 0: initial, 1: letters, 2: words, 3: sentences, 4: paragraphs, 5: final
  const [progress, setProgress] = useState({
    letters: null,
    words: null,
    sentences: null,
    paragraphs: null
  });
  const [userName, setUserName] = useState('');
  const [results, setResults] = useState([]);
  const [finalLevelReached, setFinalLevelReached] = useState(null);

  const handleLevelCompletion = (level, results) => {
    const percentage = calculatePercentage(results);
    setProgress(prev => ({ ...prev, [level]: percentage }));
    setResults(results);
  };

  const handleNextButtonClick = () => {
    if (currentLevel === 1 && progress.letters >= 80) {
      setCurrentLevel(2);
    } else if (currentLevel === 1 && progress.letters < 80) {
      setFinalLevelReached(1);
      setCurrentLevel(5); // Final Page
    } else if (currentLevel === 2 && progress.words >= 70) {
      setCurrentLevel(3);
    } else if (currentLevel === 2 && progress.words < 70) {
      setFinalLevelReached(2);
      setCurrentLevel(5); // Final Page
    } else if (currentLevel === 3 && progress.sentences >= 65) {
      setCurrentLevel(4);
    } else if (currentLevel === 3 && progress.sentences < 65) {
      setFinalLevelReached(3);
      setCurrentLevel(5); // Final Page
    } else if (currentLevel === 4) {
      setFinalLevelReached(4);
      setCurrentLevel(5); // Final Page
    }
  };

  const handleNameSubmit = (name) => {
    setUserName(name);
    setCurrentLevel(1);
  };

  return (
    <div className="App container mt-5">
      <h1 className="mb-4">Literacy Test App</h1>
      {currentLevel === 0 && <InitialPage onNameSubmit={handleNameSubmit} />}
      {currentLevel === 1 && (
        <>
          <LettersTable onComplete={(results) => handleLevelCompletion('letters', results)} />
          <button className="btn btn-primary mt-3" onClick={handleNextButtonClick}>Next</button>
        </>
      )}
      {currentLevel === 2 && (
        <>
          <WordsTable onComplete={(results) => handleLevelCompletion('words', results)} />
          <button className="btn btn-primary mt-3" onClick={handleNextButtonClick}>Next</button>
        </>
      )}
      {currentLevel === 3 && (
        <>
          <SentencesTable onComplete={(results) => handleLevelCompletion('sentences', results)} />
          <button className="btn btn-primary mt-3" onClick={handleNextButtonClick}>Next</button>
        </>
      )}
      {currentLevel === 4 && (
        <>
          <ParagraphsTable onComplete={(results) => handleLevelCompletion('paragraphs', results)} />
          <button className="btn btn-primary mt-3" onClick={handleNextButtonClick}>Next</button>
        </>
      )}
      {currentLevel === 5 && <FinalPage userName={userName} currentLevel={finalLevelReached} />}
    </div>
  );
}

export default Result;
