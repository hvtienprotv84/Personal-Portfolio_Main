import React, { useState } from 'react';

const Recorder = () => {
    const [recognizedText, setRecognizedText] = useState('');
    const [isListening, setIsListening] = useState(false);

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US'; // Ngôn ngữ tiếng Anh
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setRecognizedText(transcript);
            console.log('Recognized text:', transcript);

            if (transcript.toLowerCase() === 'home') {
                window.location.hash = '#home';
            } else if (transcript.toLowerCase() === 'contact') {
                window.location.hash = '#contact';
            } else {
                alert('Could not recognize the command!');
            }
        };

        recognition.onerror = (event) => {
            console.error('Recognition error:', event.error);
            alert('Error in speech recognition.');
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start(); // Bắt đầu nhận diện
    };

    return (
        <div className="fixed top-2 z-50">
            <button onClick={startListening} disabled={isListening}>
                {isListening ? 'Listening...' : 'Start Listening'}
            </button>
            {recognizedText && (
                <div>
                    <p>Recorded: {recognizedText}</p>
                </div>
            )}
        </div>
    );
};

export default Recorder;
