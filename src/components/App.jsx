import React from 'react';
import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import style from './App.module.css';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const leaveFeedback = (value) => {
    switch (value) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
       break;
      default:
        return;
    }
  };

  const feedbackCounter = () => {
    return good + neutral + bad;
  }

  const positivePercentCounter = () => {
    return Math.round((good / feedbackCounter()) * 100);
  }

  const options = Object.keys({ good, neutral, bad });
  
    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            leaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {feedbackCounter() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbackCounter()}
              positivePercent={positivePercentCounter()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
