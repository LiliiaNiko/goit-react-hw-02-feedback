import React from 'react';

const FeedBackOptions = ({ onGoodReviews, onNeutralRewies, onBadRewies }) => {
  return (
    <div
      style={{
        width: 200,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <button type="button" onClick={onGoodReviews}>
        Good
      </button>
      <button type="button" onClick={onNeutralRewies}>
        Neutral
      </button>
      <button type="button" onClick={onBadRewies}>
        Bad
      </button>
    </div>
  );
};

export default FeedBackOptions;
