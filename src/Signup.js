import React, { useState } from "react";
import './Signup.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError(""); // Clear error if everything is valid
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        // Perform further signup logic here (e.g., send data to backend)
    };

    return (
        <div className="Signup">
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>} {/* Error message */}
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/Login">Sign In Here!</Link></p> {/* Use Link instead of <a> */}
        </div>
    );
}

export default Signup;
