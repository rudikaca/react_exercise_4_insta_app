import React from "react";
import './PostContainer.css';
import {useNavigate, useParams} from "react-router-dom";

const PostDetails = ({data}) => {

    const params = useParams();
    const postId = params.id;
    const navigate = useNavigate();
    const post = data.filter((item) => item.id === postId)[0];

    const goBack = () => {
        navigate('/');
    }

    return (
        <div className="post-details-container">
            <div className="post-details-header">
                <h1 className="title-details-post">Details page of {post.username.toUpperCase()}</h1>
                <button className="back-button" onClick={goBack}>Back to Posts</button>
            </div>
            <div>
                <div className="title">
                    Profile photo: <img className="profile-image" src={post.thumbnailUrl} alt="image"/>
                </div>
                <p>likes: {post.likes}</p>
            </div>
            <div><img src={post.imageUrl} alt=""/></div>
            <div className="comments">
                <h3>Comment Section</h3>
                <div>
                    {post.comments.map((comment) =>
                        <div className="comment" key={comment.id}>
                            <p><strong>{comment.username}:</strong> {comment.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PostDetails;
