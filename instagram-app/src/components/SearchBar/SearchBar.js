import React from "react";
import InstaLogo from '../../assets/images/insta_logo.png';
import './SearchBar.css';
import {AiOutlineCompass, AiOutlineHeart} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {useStateContext} from "../../contexts/ContextProvider";

const SearchBar = ({ handleSearch }) => {
    const {user} = useStateContext();

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className="container">
            <div>
                <img className="logo" src={InstaLogo} alt="InstaLogo"/>
            </div>
            <div>
                <input className="input" type="text" placeholder="Search" onChange={handleSearch} />
            </div>
            <div className="profile">
                <button onClick={handleLogout}>Logout</button>
                <AiOutlineCompass /><AiOutlineHeart /><BsPerson />
            </div>
        </div>
    )
}

export default SearchBar;
