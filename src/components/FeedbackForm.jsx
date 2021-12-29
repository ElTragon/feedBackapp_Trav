import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
function FeedbackForm() {
  const [text, setText] = useState('');
  const [isDisabled, setisDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

  useEffect(()=>{
      if(feedbackEdit.edit === true){
            setisDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
      }

  }, [feedbackEdit])

  const handleChangeText = (e) => {
    // console.log(e.target.value)

    if (text === '') {
      setMessage(null);
      setisDisabled(true);
    } else if (text.length !== '' && text.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setisDisabled(true);
    } else {
      setMessage(null);
      setisDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);

      setText('');
      console.log('empty');
      // setRating(10)
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleChangeText}
            value={text}
          />

          <Button type='submit' isDisabled={isDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
