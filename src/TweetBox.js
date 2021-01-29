import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')
    
    const sendTweet = e => {
        e.preventDefault()

        db.collection('tweets').add({
            displayName: 'Subhankar',
            username: 'subhankar_rj',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1189263685996273664/UUNtDgGi_400x400.jpg"
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return(
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar />
                    <input 
                        value={tweetMessage} 
                        onChange={ e => setTweetMessage(e.target.value)}
                        placeholder="What's happening?" 
                        type='text' />
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type='text' />

                <Button 
                    onclick={sendTweet}
                    className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox