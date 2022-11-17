import './App.css';
import dummyData from "./dummy-data";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      if (JSON.parse(window.localStorage.getItem('dummyData')) === null) {
        return setData(dummyData);
      }

    setData(JSON.parse(window.localStorage.getItem('dummyData')));
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={data} setData={setData} />
    </div>
  );
}

export default App;
