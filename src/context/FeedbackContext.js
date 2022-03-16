import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'this is from context 1', rating: 10 },
    { id: 2, text: 'this is from context 2', rating: 6 },
    { id: 3, text: 'this is from context 3', rating: 4 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  //edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update: return array with new data
  const updateFeedback = (id, updatedItem) => {
    // console.log(id, updatedItem);
    setFeedback(feedback.map((item) => (item.id === id ? updatedItem : item)));
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  //delete
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure  you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    // console.log(id);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
