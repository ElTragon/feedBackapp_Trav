import Card from '../shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import React from 'react'



function FeedbackItem({item, handleDelete}) {

    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item');
    
    // // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1
    //     });
    // }

    const handleClick = (id) => {
        handleDelete(id)
    }

    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handleClick(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-diplay">
                {item.text}
            </div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
