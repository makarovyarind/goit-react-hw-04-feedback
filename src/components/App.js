//створити додаток для збору статистики
//Застосунок повинен відображати кількість зібраних відгуків для кожної категорії. Застосунок не повинен зберігати статистику відгуків між різними сесіями (оновлення сторінки).

//Стан застосунку обов'язково повинен бути наступного вигляду, додавати нові властивості не можна.

//state = {
  //good: 0,
 // neutral: 0,
 // bad: 0
//}
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackButtons/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { Notification } from './Notification.js/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, option) => accumulator + option, 0);
  };


  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100) || 0; 
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title="Statistics"> 
        {this.countTotalFeedback() !== 0 
        ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> 
        : <Notification message="There is no feedback" />}
      </Section>
    </Container>
      )
  };
};
