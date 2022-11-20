import React, {useEffect, useState} from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {useStateContext} from "../../contexts/ContextProvider";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useStateContext();

    useEffect(() => {
        if (JSON.parse(window.localStorage.getItem('user'))) {
            setUser(JSON.parse(window.localStorage.getItem('user')));
        } else {
            navigate('/login');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(username));
        if (username === JSON.parse(window.localStorage.getItem('user'))) {
            if (JSON.parse(window.localStorage.getItem('user')) !== 'Rudi') {
                setError(true);
            }
            setUser(JSON.parse(window.localStorage.getItem('user')));
        }
    }

    return (
        <>
            <div className="login-container">
                <h1 className="title-login">Welcome Login Form</h1>
                <form onSubmit={handleSubmit} className="form">
                    <input className="form-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="form-input" type="password" placeholder="Password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="login-button" type="submit" disabled={!password || !username}>Login</button>
                    {error && <div className="error">Wrong username</div>}
                </form>
            </div>
        </>
    )
}

export default Login;
