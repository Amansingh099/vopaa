import React from 'react';
import './Question.css';

export default function Question({ questiondata }) {
  return (
    <div className='question-container'>
      {questiondata ? (
        <div>
          <h2>{questiondata.id}</h2>
          <span className='questionfont'>{questiondata.question}</span>
        </div>
      ) : (
        <p>No question provided</p>
      )}
    </div>
  );
}
