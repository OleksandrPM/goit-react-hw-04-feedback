import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default App;

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackKinds = ['good', 'neutral', 'bad'];

  const incrementCount = btnId => {
    if (btnId === 'good') {
      setGood(good + 1);
    } else if (btnId === 'neutral') {
      setNeutral(neutral + 1);
    } else if (btnId === 'bad') {
      setBad(bad + 1);
    } else {
      return;
    }
  };

  const totalCount = good + neutral + bad;

  const positivePercentage = countPositiveFeedbackPercentage(good, totalCount);

  return (
    <div className="app">
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={feedbackKinds}
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

function countPositiveFeedbackPercentage(positiveFeedbacks, totalFeedbacks) {
  if (totalFeedbacks !== 0) {
    return Math.round((positiveFeedbacks / totalFeedbacks) * 100);
  } else {
    return 0;
  }
}
