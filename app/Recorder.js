import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

const Recorder = () => {
    const { theme } = useTheme(); 
    const [textColor, setTextColor] = useState('');
    const [recognizedText, setRecognizedText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        // Cập nhật màu sắc dựa trên theme
        setTextColor(theme === 'dark' ? 'text-[#e4ded7]' : 'text-[#ffb800]')
      }, [theme]);  
    
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
            alert('Không nhận diện được giọng nói.');
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start(); // Bắt đầu nhận diện
    };

    return (
        <div className="fixed top-[100px] font-sans font-bold right-[85px] z-50">
            <button onClick={startListening} disabled={isListening}>
            <div className='flex flex-row justify-center items-center'>
                <img className='w-[30px]' src='https://cdn.pixabay.com/animation/2023/10/03/13/05/13-05-39-823_512.gif' alt=''/>
                    <div className={clsx('text-[16px]',
                    textColor  
                    )}>
                        {isListening ? 'Đang lắng nghe...' : 'Bắt đầu lắng nghe'}
                    </div>
            </div>
            </button>
            
            {/* {recognizedText && (
                <div>
                    <p>Recorded: {recognizedText}</p>
                </div>
            )} */}

            <div className='flex flex-col justify-center items-center'>
                {recognizedText && showText && (
                    <div className='flex flex-row'>
                        <p>Nghe được: {recognizedText}</p>
                        <button className='ml-[5px] font-bold text-red-500' onClick={() => setShowText(false)}>X</button>
                    </div>
                )}
                {!showText && (
                    <button onClick={() => setShowText(true)}>
                        <div className='flex flex-row'>
                            <img className='w-[30px]' src='https://cdn.icon-icons.com/icons2/3053/PNG/512/google_docs_alt_macos_bigsur_icon_190127.png' alt=''/>
                            <div className={clsx('',
                            textColor  
                            )}>Show Recorded Text</div>
                        </div>
                    </button>
                )}
            </div>

        </div>
    );
};

export default Recorder;
