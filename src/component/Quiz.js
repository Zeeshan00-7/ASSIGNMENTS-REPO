import React, { useState, useEffect } from 'react';
import styles from './Quiz.module.css';
const questionsData = [

    {
      Question: 'Who is the PM of India',
      Options: ['Salman khan', 'shahrukh Khan', 'Rahul Gandhi', 'Narendra Damodar Das Modi'],
      CorrectAnswer: 'Narendra Damodar Das Modi',
    },
    {
      Question: ' Which animal is known as the Ship of the Desert',
      Options: ['Horse', 'Cow', 'Camel', 'Ox'],
      CorrectAnswer: 'Camel',
    },
    {
      Question: 'How many days are there in a week',
      Options: ['1', '10', '7', '70'],
      CorrectAnswer: '7',
    },
    {
      Question: 'How many hours are there in a day',
      Options: ['24', '90', '10', '21'],
      CorrectAnswer: '24',
    },
    {
      Question: ' How many letters are there in the English alphabet',
      Options: ['26', '22', '27', '20'],
      CorrectAnswer: '26',
    },
  
    {
      Question: 'Who is the PM of India',
      Options: ['Salman khan', 'shahrukh Khan', 'Rahul Gandhi', 'Narendra Damodar Das Modi'],
      CorrectAnswer: 'Narendra Damodar Das Modi',
    },
    {
      Question: ' Which animal is known as the Ship of the Desert',
      Options: ['Horse', 'Cow', 'Camel', 'Ox'],
      CorrectAnswer: 'Camel',
    },
    {
      Question: 'How many days are there in a week',
      Options: ['1', '10', '7', '70'],
      CorrectAnswer: '7',
    },
    {
      Question: 'How many hours are there in a day',
      Options: ['24', '90', '10', '21'],
      CorrectAnswer: '24',
    },
    {
      Question: ' How many letters are there in the English alphabet',
      Options: ['26', '22', '27', '20'],
      CorrectAnswer: '26',
    },
   
  //   {/* // Add more questions here */}
  ];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (isStarted && !isSubmitted) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isSubmitted]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setSelectedOption('');

    if (currentQuestion === questionsData.length - 1) {
      setIsSubmitted(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleSubmitTest = () => {
    const correctAnswer = questionsData[currentQuestion].CorrectAnswer;
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setIsSubmitted(true);
  };
  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setIsSubmitted(false);
    setIsPassed(false);
    setIsStarted(false);
    setTime(10 * 60);
  };

  useEffect(() => {
    if (isSubmitted) {
      if (score >= 12) {
        setIsPassed(true);
      }
    }
  }, [isSubmitted, score]);

  const renderQuestion = () => {
    if (isSubmitted) {
      return (
        <div className={styles.resultContainer}>
          <h2 className={styles.title}>Test Result</h2>
          <p className={styles.resultScore}>Your score: {score} out of {questionsData.length * 2}</p>
          {isPassed ? (
            <p className={`${styles.resultScore} ${styles.passed}`}>Congratulations! You passed the test!</p>
          ) : (
            <button className={`${styles.restartBtn} ${styles.resultScore}`} onClick={handleRestartTest}>Restart Test</button>
          )}
        </div>
      );
    }

    const question = questionsData[currentQuestion];

    return (
      <div>
        <h2 className={styles.title}>Question {currentQuestion + 1}</h2>
        <p className={styles.question}>{question.Question}</p>
        <div className={styles.options}>
          {question.Options.map((option, index) => (
            <div className={styles.option} key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <button className={styles.submitBtn} onClick={currentQuestion === questionsData.length - 1 ? handleSubmitTest : handleNextQuestion}>
          {currentQuestion === questionsData.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    );
  };

  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.title}>Test</h1>
      {!isStarted ? (
        <button className={styles.submitBtn} onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <div>
          {renderQuestion()}
          <p className={styles.timeRemaining}>Time remaining: {formatTime(time)}</p>
          {time === 0 && !isSubmitted && (
            <div>
              <p className={styles.timesUp}>Time's up! Test submitted automatically.</p>
              {renderQuestion()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;