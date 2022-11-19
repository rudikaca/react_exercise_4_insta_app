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
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={!password || !username}>Login</button>
                </form>
                {error && <div className="error"><p>Wrong username</p></div>}
            </div>
        </>
    )
}

export default Login;
