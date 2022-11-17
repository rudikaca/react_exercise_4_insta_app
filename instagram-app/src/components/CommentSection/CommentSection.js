import React from "react";
import './CommentSection.css';

const CommentSection = ({comments}) => {

    return (
        <>
            {comments?.map((comment) =>(
            <div className="comment" key={comment.id}>
                <p><strong>{comment.username}</strong> {comment.text}</p>
            </div>))}
        </>
    )
}

export default CommentSection;
