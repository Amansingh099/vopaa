import React from 'react';
import './Remedial.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app">

      <h1 >You have scored below 40 percent</h1>
      <div className="videos-container">
        <iframe
          title="Video 1"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/video_id_1"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          title="Video 2"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/video_id_2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          title="Video 3"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/video_id_3"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tips-container">
        <h2>Tips to Improve Your Level in Education:</h2>
        <ul>
          <li>Use these videos to improve ypur reading</li>
          <li>Practice 30 minutes everday</li>
          <li>Stay motivated and maintain a positive attitude towards learning.</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
