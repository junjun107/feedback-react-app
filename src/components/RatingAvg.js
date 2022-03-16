import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

const RatingAvg = () => {
  const { feedback } = useContext(FeedbackContext);
  // const { rating } = feedback;

  let avg = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  // console.log(avg);
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Avg Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
};

export default RatingAvg;
