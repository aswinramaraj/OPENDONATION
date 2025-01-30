import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './login.css';
// import Main from "./Main";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navi = useNavigate()

    const handleSubmit1 = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:7010/login_data", { email, password });
            if (response.status ===201)
            {
                navi('/main')
            }
            setMessage(response.data.message || "User registered successfully!");
        } catch (error) {
            setMessage(error.response?.data?.error || "Error connecting to the server.");
        }
        
    };

    return (
        <div className="container1">
            <div className="image-container"></div>

            <div className="form-container">
                <h2 className="text-3xl">Open Donations</h2>
                <p className="text-gray-600">Sign in to continue</p>

                <form className="mt-6" onSubmit={handleSubmit1}>
                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                    </div>

                    <button type="submit">Login</button>
                </form>

                <h4>
                    <Link to="/sign" className="text-black no-underline hover:text-gray-600">You need to sign up to create an account.</Link>
                </h4>

                {message && <p className="mt-4 text-red-500">{message}</p>}
            </div>
        </div>
    );
};

export default Login;
