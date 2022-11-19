import React, {useState} from "react";
import './PostContainer.css';
import PostsPage from "./PostsPage";
import SearchBar from "../SearchBar/SearchBar";
import '../../App.css';

const PostContainer = ({data, setData}) => {
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        const search = e.target.value;
        const result = data.filter((post) => {
            if (search === '') {
                return post;
            } else if (post.username.toLowerCase().includes(search.toLowerCase())) {
                return post;
            }
        });
        setSearchResult(result);
    }

    return (
        <div className="App">
            <SearchBar handleSearch={handleSearch} />
            {!searchResult.length ? data.map((post) => <PostsPage key={post.id} post={post} data={data} setData={setData} />) :
                searchResult.map((post) => <PostsPage key={post.id} post={post} data={data} setData={setData} />)}
        </div>
    )
}

export default PostContainer;
