import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isCorrectAnswer, calculatePercentage } from './utils';

const SentencesTable = ({ onComplete }) => {
  const [sentencesData, setSentencesData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/sentences.json')
      .then(response => response.json())
      .then(data => {
        setSentencesData(data.sentences);
        const res = data.sentences.map(item => ({
          question: item.question,
          answer: item.answer,
          isCorrect: isCorrectAnswer(item.question, item.answer)
        }));
        setResults(res);
        onComplete(res);
      });
  }, [onComplete]);

  const percentage = calculatePercentage(results);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sentences Questions and Answers</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index} className={item.isCorrect ? 'table-success' : 'table-danger'}>
              <td>{item.question}</td>
              <td>{item.answer}</td>
              <td>{item.isCorrect ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-weight-bold">Accuracy: {percentage.toFixed(2)}%</p>
    </div>
  );
};

export default SentencesTable;
