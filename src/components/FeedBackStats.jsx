import React from 'react'
import PropTypes from 'prop-types'


function FeedBackStats({feedBack}) {

    //Call avg score

    let average = feedBack.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedBack.length

    average = average.toFixed(1).replace(/[.,]0?/,'')

    // console.log(average)
    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


FeedBackStats.propTypes = {
        feedBack: PropTypes.array.isRequired,
}

export default FeedBackStats
