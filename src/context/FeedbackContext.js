import React, { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)  
  const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
  });

//   Using proxy now, check package.json
//   const baseURL = 'http://localhost:5000/'

  useEffect(() => {
    fetchFeedback()
  }, [])

  //fetch feecback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc')
    const data = await response.json()
    // console.log(data)
    setFeedback(data)
    setIsLoading(false)
  }
  //delete from feedback
  const deleteFeedback = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
        await fetch('/feedback/${id}', {method: 'DELETE'})
        setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add to feedback
  const addFeedback = async (newFeedback) => {

    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback),
    })

    //Server handles the below
    // newFeedback.id = uuidv4();
    // console.log(newFeedback)
    const data = await response.json()
    setFeedback([data, ...feedback]);
    
  };

  // item set to update
  const editFeedback = (item) => {
    setFeedbackEdit({
          item,
          edit: true,
      })
  } 

  // update feedback
  const updateFeedback = async (id, updateItem) => {
    // console.log(id, updateItem)

    const responce = await fetch('/feedback/${id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateItem)
    })

    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...updateItem} : item ))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
