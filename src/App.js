import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
function App() {

    
    return(
        <>
        <Header  />
        <div className='container'>
            {/* <h1> Hello from the app componet</h1> */}
            <FeedbackItem />
        </div>
        
        
        </>
    )
}

export default App