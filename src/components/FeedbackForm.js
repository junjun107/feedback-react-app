import React, { useState, useContext, useEffect } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import SelectRating from './SelectRating';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [alertMsg, setAlertMsg] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      // addFeedback(newFeedback);
      // console.log(newFeedback);
      // setText('');
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setBtnDisabled(true);
      setRating(10);
      setText('');
    }
  };
  const onChangehandler = (e) => {
    //check text input is empty
    if (text === '') {
      setAlertMsg(null);
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length <= 10) {
      setAlertMsg('Feedback must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setAlertMsg(null);
    }
    // console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <h2>How would you rate your service?</h2>
        {/* Select Rating Radio Buttons*/}
        <SelectRating setRating={setRating} rating={rating} />
        {/* input  */}
        <div className='input-group'>
          <input
            type='text'
            value={text}
            placeholder='Write your review here'
            onChange={onChangehandler}
          />
          {/* button is a reuseble component  */}
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {/* alert message */}
        {alertMsg && <div className='message'>{alertMsg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
