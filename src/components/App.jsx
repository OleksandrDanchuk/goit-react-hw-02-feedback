import { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = ({ target }) => {
    this.setState(prevState => ({ [target.name]: prevState[target.name] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, element) => acc + element, 0);

  countPositiveFeedbackPerc = () =>
    this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    return (
      <div className={css.container}>
        <Section titel="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.addFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section titel="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPerc}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
