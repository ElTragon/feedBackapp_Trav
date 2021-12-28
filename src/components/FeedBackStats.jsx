import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackStats() {

    const {feedback} = useContext(FeedbackContext)


    //Call avg score

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0?/,'')

    // console.log(average)
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


FeedBackStats.propTypes = {
        feedBack: PropTypes.array.isRequired,
}

export default FeedBackStats
