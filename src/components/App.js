import { useState } from 'react';
import { FeedbackOptions } from './FeedbackButtons/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { Notification } from './Notification.js/Notification';

export function App() {

  const [status, setstatus] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setstatus(prevStatus => ({
      ...prevStatus,
      [option]: prevStatus[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(status).reduce((accumulator, option) => accumulator + option, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(status.good / countTotalFeedback() * 100) || 0; 
  };

    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(status)} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics"> 
        {countTotalFeedback() !== 0 
        ? <Statistics good={status.good} neutral={status.neutral} bad={status.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> 
        : <Notification message="There is no feedback" />}
      </Section>
    </Container>
      )
};
