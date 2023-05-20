import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementCount = btnId => {
    this.setState(prevState => {
      return { [btnId]: prevState[btnId] + 1 };
    });
  };

  countTotalFeedback = () => {
    const keys = Object.keys(this.state);
    return keys.reduce((acc, current) => acc + this.state[current], 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const {
      state,
      state: { good, neutral, bad },
      incrementCount,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const totalCount = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div className="app">
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(state)}
              onLeaveFeedbackClick={incrementCount}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            totalCount > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalCount}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        />
      </div>
    );
  }
}

export default App;
