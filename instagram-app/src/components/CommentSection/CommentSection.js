import React, {useState} from "react";
import './CommentSection.css';
import moment from "moment";

const CommentSection = ({comments, post, data, setData}) => {
    const [comment, setComment] = useState('');

    const handleKey = (e) => {
        if (e.key === "Enter") {
            const lastId = post.comments[post.comments.length-1];
            const finalComment = {id: lastId.id+1, username: 'Rudi', text: comment};

            const newPosts = data.map((newPost) => {
                if (newPost.id === post.id) {
                    newPost.comments.push(finalComment);
                }

                return newPost;
            });

            setData(newPosts);
            setComment('');
            localStorage.setItem('dummyData', JSON.stringify(newPosts));
        }
    }

    return (
        <>
            {comments?.map((comment) =>(
            <div className="comment" key={comment.id}>
                <p><strong>{comment.username}</strong> {comment.text}</p>
            </div>))}
            <div className="timestamp">
                <span>{moment().startOf('hour').fromNow()}</span>
            </div>
            <div className="comment-input-container">
                <input onKeyPress={handleKey} value={comment} onChange={(e) => setComment(e.target.value)} className="comment-input" type="text" placeholder="Add a comment..." />
            </div>
        </>
    )
}

export default CommentSection;
