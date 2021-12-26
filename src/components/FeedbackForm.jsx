import React, {useState} from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
function FeedbackForm() {

    const [text, setText] = useState('')
    const [isDisabled, setisDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleChangeText = (e) => {
        // console.log(e.target.value)
        
        if(text === ''){
            setMessage(null)
            setisDisabled(true)
        }else if(text.length !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setisDisabled(true)
        } else {
            setMessage(null)
            setisDisabled(false)
        }
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect />
                <div className="input-group">
                    <input type="text" 
                    placeholder='Write a review' 
                    onChange={handleChangeText} />
                    <Button  type="submit" isDisabled={isDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm
