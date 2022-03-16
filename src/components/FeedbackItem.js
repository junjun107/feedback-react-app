//single feedback itemdelete & edit feedback
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from '../shared/Card';

const FeedbackItem = ({ item }) => {
  const { id, rating, text } = item;

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const handleDelete = () => {
    deleteFeedback(id);
  };

  const handleEdit = () => {
    editFeedback(item);
  };
  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={handleDelete}>
        <FaTimes />
      </button>
      <button className='edit' onClick={handleEdit}>
        <FaEdit />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
