import React, {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList({ handleDelete}) {
  const {feedback} = useContext(FeedbackContext)


    if(!feedback|| feedback.length === 0){
        return <p>Ne Feedback Yet</p>
    }

  


    // return (
    //     <div className='feedBack-list'>
    //         {feedBack.map( (item) => (
    //             <div>
    //                 <FeedbackItem key={item.id} item={item}
    //                 handleDelete={handleDelete}/>
    //             </div>
    //         ))}
    //     </div>
    // )



    return (
        <div className='feedBack-list'>
            <AnimatePresence>
            {feedback.map( (item) => (
                <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
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
