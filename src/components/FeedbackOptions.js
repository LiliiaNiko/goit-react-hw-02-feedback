import React from 'react';
import { FeedbackWrap } from './FeedbackOptions.styled';

const FeedBackOptions = ({ onGoodReviews, onNeutralRewies, onBadRewies }) => {
  return (
    <FeedbackWrap>
      <button type="button" onClick={onGoodReviews}>
        Good
      </button>
      <button type="button" onClick={onNeutralRewies}>
        Neutral
      </button>
      <button type="button" onClick={onBadRewies}>
        Bad
      </button>
    </FeedbackWrap>
  );
};

export default FeedBackOptions;
