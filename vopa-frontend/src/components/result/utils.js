export const isCorrectAnswer = (question, answer) => {
    return question.trim().toLowerCase() === answer.trim().toLowerCase();
  };
  
  export const calculatePercentage = (results) => {
    const correctAnswers = results.filter(result => result.isCorrect).length;
    return (correctAnswers / results.length) * 100;
  };
  