import React, {useState} from "react";
import './Login.css';
import {useStateContext} from "../../contexts/ContextProvider";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuthenticated} = useStateContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password) {
            setIsAuthenticated(true);
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
            </div>
        </>
    )
}

export default Login;
