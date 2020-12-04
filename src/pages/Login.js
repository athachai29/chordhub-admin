import './Login.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../services/AuthService';
import { useAuth } from '../context/auth'

function Login(props) {
    const { setAuthTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const args = { email, password };
        authService.login(args).then(res => {
            const { token } = res;
            authService.setToken(token).then(() => {
                setAuthTokens(token);
                setLoggedIn(true);
            });
        });
    }

    if (isLoggedIn) {
        return <Redirect to={'/'} />;
    }

    return (
        <>
            <div className="login-form">
                <h1>ChordHub Admin 🎸</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            name="Email"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small></small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="Password"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <small></small>
                    </div>
                    <button type="submit" disabled={!validateForm()}>Log in</button>
                </form>
            </div>
        </>
    );
}

export default Login;
