import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainer.css';
import {FaRegComment, FaRegHeart} from "react-icons/fa";

const PostContainer = ({data, setData, searchResult}) => {

    const likePost = (postId) => {
        const updatedPost = data?.map((post) => {
            if (!post.like && postId === post.id) {
                return {...post, likes: post.likes + 1, like: true}
            } else if (post.like && postId === post.id) {
                return {...post, likes: post.likes - 1, like: false}

            }
            return {...post};
        });
        setData(updatedPost);
        localStorage.setItem('dummyData', JSON.stringify(updatedPost));
    }

    return (
        <>
            {!searchResult.length ? data.map((post) =>
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
                        <FaRegHeart className={post.like && 'active'} onClick={() => likePost(post.id)} /><FaRegComment />
                    </div>
                    <p className="likes"><strong>{post.likes} likes</strong></p>
                </div>
                <div className="comments">
                    <CommentSection post={post} data={data} setData={setData} comments={post.comments} />
                </div>
            </div>) :
                searchResult.map((post) =>
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
                                <FaRegHeart className={post.like && 'active'} onClick={() => likePost(post.id)} /><FaRegComment />
                            </div>
                            <p className="likes"><strong>{post.likes} likes</strong></p>
                        </div>
                        <div className="comments">
                            <CommentSection post={post} data={data} setData={setData} comments={post.comments} />
                        </div>
                    </div>)}
        </>
    )
}

export default PostContainer;
