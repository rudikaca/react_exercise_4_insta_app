import React from "react";
import './PostContainer.css';
import PostsPage from "./PostsPage";

const PostContainer = ({data, setData, searchResult}) => {

    return (
        <>
            {!searchResult.length ? data.map((post) => <PostsPage key={post.id} post={post} data={data} setData={setData} />) :
                searchResult.map((post) => <PostsPage key={post.id} post={post} data={data} setData={setData} />)}
        </>
    )
}

export default PostContainer;
