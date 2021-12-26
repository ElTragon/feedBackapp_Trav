import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


function FeedbackList({feedBack, handleDelete}) {
    if(!feedBack|| feedBack.length === 0){
        return <p>Ne Feedback Yet</p>
    }



    return (
        <div className='feedBack-list'>
            {feedBack.map( (item) => (
                <div>
                    <FeedbackItem key={item.id} item={item}
                    handleDelete={handleDelete}/>
                </div>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList
