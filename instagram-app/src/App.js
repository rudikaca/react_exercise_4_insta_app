import './App.css';
import dummyData from "./dummy-data";
import {useEffect, useState} from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import Login from "./components/Login/Login";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import PrivateRoute from "./authentication/PrivateRoute";
import PublicRoute from "./authentication/PublicRoute";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      if (JSON.parse(window.localStorage.getItem('dummyData')) === null) {
        return setData(dummyData);
      }

    setData(JSON.parse(window.localStorage.getItem('dummyData')));
  }, []);

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/'  element={<PostContainer data={data} setData={setData} />} />
            </Route>
            <Route exact path='/' element={<PublicRoute />}>
                <Route exact path='/login' element={<Login />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
