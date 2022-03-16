import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  // console.log(feedback);

  if (!feedback && feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
