import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
import FlipMove from "react-flip-move"
import coverPhoto from "./images/cover.png";

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);
    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then( ()=> {
            setInput("")
        });
    };

    return (
        <div className="feed">
            {/* <div className="background_cover"> */}
                <img className="background_cover" src={coverPhoto} alt="" />
            {/* </div> */}
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input onChange={e => setInput(e.target.value)} type="text" value={input} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* Post section */}
            <FlipMove>
            {
                posts.map(({id, data:{name, description, message, photoUrl}}) =>(
                    <Post
                    key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
            ))}
            </FlipMove>
            
            {/* <Post name="Sultana Tasnim jahan" description="It's a test" message="WOW, It worked" /> */}
        </div>
    )
}

export default Feed
