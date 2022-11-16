import './App.css';
import dummyData from "./dummy-data";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyData)
    console.log(data)
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <PostContainer />
      </header>
    </div>
  );
}

export default App;
