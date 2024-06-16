import React from 'react';
import './Resulttable.css';
import Remedial from "./Remedial";
const ResultTable = ({ answers }) => {
  const calculatePercentage = (answers) => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    return (correctAnswers / answers.length) * 100;
  };

  const percentage = calculatePercentage(answers);

  // Render the Remedial component if accuracy is below 70%
  if (percentage < 40) {
    return <Remedial />;
  }

  // Otherwise, render the normal result table
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Level Results</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Question</th>
            <th>User Answer</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => (
            <tr key={index} className={answer.isCorrect ? 'table-success' : 'table-danger'}>
              <td>{answer.question}</td>
              <td>{answer.userAnswer}</td>
              <td>{answer.isCorrect ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-weight-bold">Accuracy: {percentage.toFixed(2)}%</p>
    </div>
  );
};

// const Remedial = () => {
//   // Implement your Remedial component logic here
//   return (
//     <div className="container mt-5">
//       <h2>Remedial Page</h2>
//       <p>Your accuracy is below 70%. Please review and try again.</p>
//       {/* You can add additional content or instructions */}
//     </div>
//   );
// };

export default ResultTable;
