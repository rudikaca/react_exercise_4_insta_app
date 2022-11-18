import './App.css';
import dummyData from "./dummy-data";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  const [data, setData] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
      if (JSON.parse(window.localStorage.getItem('dummyData')) === null) {
        return setData(dummyData);
      }

    setData(JSON.parse(window.localStorage.getItem('dummyData')));
  }, []);

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
      <PostContainer data={data} setData={setData} searchResult={searchResult} />
    </div>
  );
}

export default App;
