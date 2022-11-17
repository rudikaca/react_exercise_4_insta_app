import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainer.css';
import {FaRegComment, FaRegHeart} from "react-icons/fa";

const PostContainer = ({data}) => {
    const TimeStamp = () => {
        //
    }

    return (
        <>
            {data.map((post) =>
            <div key={post.id} className="post-container">
                <div className="image-container">
                    <div className="title">
                        <img className="profile-image" src={post.thumbnailUrl} alt="logo"/>
                        <p><strong>{post.username}</strong></p>
                    </div>
                    <div>
                        <img className="image" src={post.imageUrl} alt=""/>
                    </div>
                    <div className="icon-container">
                        <FaRegHeart /><FaRegComment />
                    </div>
                    <p className="likes"><strong>{post.likes} likes</strong></p>
                </div>
                <div className="comments">
                    <CommentSection comments={post.comments} />
                </div>
                <div className="timestamp">
                    <span>{post.timestamp}</span>
                </div>
            </div>)}
        </>
    )
}

export default PostContainer;
