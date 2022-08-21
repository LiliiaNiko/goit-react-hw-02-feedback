import { Component } from 'react';
import Statistics from './Statistics';
import FeedBackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodReviews = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: this.countTotalFeedback(),
        positivePercentage: this.countPositiveFeedbackPercentage(),
      };
    });
  };

  handleNeutralReviews = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: this.countTotalFeedback(),
        positivePercentage: this.countPositiveFeedbackPercentage(),
      };
    });
  };

  handleBadReviews = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: this.countTotalFeedback(),
        positivePercentage: this.countPositiveFeedbackPercentage(),
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage:
          Math.round(
            (prevState.good /
              (prevState.good + prevState.neutral + prevState.bad)) *
              100
          ) + '%',
      };
    });
  };

  render() {
    return (
      <Box p={4} height="100vh">
        <Section title="Please leave feedback">
          <FeedBackOptions
            onGoodReviews={this.handleGoodReviews}
            onNeutralRewies={this.handleNeutralReviews}
            onBadRewies={this.handleBadReviews}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
