import Header from "./components/Header"
import React, { useState } from 'react'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedBackStats from "./components/FeedBackStats"
import FeedbackForm from "./components/FeedbackForm"
// import React from 'react'
// import ReactDOM from 'react-dom'
function App() {

    const [ feedback, setFeedback] = useState(FeedbackData);
    
    const handleDelete = (id) => {
        console.log(id)
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return(
        <>
        <Header  />
        <div className='container'>
            <FeedbackForm/>
            <FeedBackStats feedBack={feedback}/>
            {/* <h1> Hello from the app componet</h1> */}
            <FeedbackList feedBack={feedback} handleDelete={handleDelete}/>
        </div>
        
        
        </>
    )
}

export default App