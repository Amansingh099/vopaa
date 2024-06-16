import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isCorrectAnswer, calculatePercentage } from './utils';

const ParagraphsTable = ({ onComplete }) => {
  const [paragraphsData, setParagraphsData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/paragraphs.json')
      .then(response => response.json())
      .then(data => {
        setParagraphsData(data.paragraphs);
        const res = data.paragraphs.map(item => ({
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
      <h2 className="mb-4">Paragraphs Questions and Answers</h2>
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

export default ParagraphsTable;
