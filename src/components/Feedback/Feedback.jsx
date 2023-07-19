import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = ({ target }) => {
    this.setState(prevState => ({ [target.name]: prevState[target.name] + 1 }));
  };
  countTotalFeedback = () => {
    Object.values(this.state).reduce((acc, element) => acc + element, 0);
  };
  countPositiveFeedbackPerc = () => {
    this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul onClick={this.addFeedback}>
          <li>
            <button name="good">Good</button>
          </li>
          <li>
            <button name="neutral">Neutral</button>
          </li>
          <li>
            <button name="bad">Bad</button>
          </li>
        </ul>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}
