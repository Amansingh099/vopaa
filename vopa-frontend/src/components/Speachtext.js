import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Speachtext.css';

const Speachtext = ({ onNext }) => {
  const [textToCopy, setTextToCopy] = useState('');

  const startListening = () => {
    resetTranscript(); // Reset the transcript before starting a new listening session
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    // Manually trigger recognition after a slight delay
    const recognitionTimeout = setTimeout(() => {
      startListening();
    }, 200);

    return () => clearTimeout(recognitionTimeout);
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleNext = () => {
    const trimmedTranscript = transcript.trim(); // Remove leading and trailing whitespace
    const cleanTranscript = trimmedTranscript.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); // Remove specific punctuation
    onNext(cleanTranscript);
    resetTranscript(); // Clear the transcript after moving to the next question
  };

  return (
    <div className="container">
      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style">
        <button onClick={startListening}>Start🎙️</button>
        <button onClick={SpeechRecognition.stopListening}>Stop🎙️</button>
      </div>
      <button className="nextbutton" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Speachtext;
