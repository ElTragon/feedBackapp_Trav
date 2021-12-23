import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import { useState } from 'react'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
function App() {

    const [ feedback, setFeedback] = useState(FeedbackData);
    
    return(
        <>
        <Header  />
        <div className='container'>
            {/* <h1> Hello from the app componet</h1> */}
            <FeedbackList feedBack={feedback}/>
        </div>
        
        
        </>
    )
}

export default App