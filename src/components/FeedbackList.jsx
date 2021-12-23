import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedBack}) {
    if(!feedBack|| feedBack.length === 0){
        return <p>Ne Feedback Yet</p>
    }
    return (
        <div className='feedBack-list'>
            {feedBack.map( (item) => (
                <div>
                    <FeedbackItem key={item.id} item={item}/>
                </div>
            ))}
        </div>
    )
}

export default FeedbackList
