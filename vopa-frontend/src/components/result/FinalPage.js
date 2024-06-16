import React from 'react';

const FinalPage = ({ userName, currentLevel }) => {
  const levels = ['Initial', 'Letters', 'Words', 'Sentences', 'Paragraphs'];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Test Complete</h2>
      <p className="font-weight-bold">User: {userName}</p>
      <p className="font-weight-bold">Final Level Reached: {levels[currentLevel-1]}</p>
    </div>
  );
};

export default FinalPage;
