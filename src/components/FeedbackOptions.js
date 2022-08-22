import React from 'react';
import { FeedbackWrap } from './FeedbackOptions.styled';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {options.map((option, idx) => {
        return (
          <button
            key={idx}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </FeedbackWrap>
  );
};

export default FeedBackOptions;
