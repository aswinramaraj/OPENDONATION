import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Main from "./Main";


import axios from "axios";
import "./login.css";

const Signup = () => {
    const navi = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [message, setMessage] = useState("sdtfjudfa artga dfhzdh");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== repassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:7010/sign_data", { name, email, password });
            setMessage(response.data.message || "Signup successful!");
            // Redirect to Main component on success
            if (response.status === 201) {
                navi("/main"); // This redirects to the '/main' route
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Error connecting to the server.");
        }
        
    };

    return (
        <div>
    

        <div className="container">
            
            {/* Left Side - Image */}
            <div className="image-container"></div>

            {/* Right Side - Form */}
            <div className="form-container">
                <h2 className="text-3xl">Open Donations</h2>
                <p className="text-gray-600">Sign up to create an account</p>

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter your Name" 
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your Email" 
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Enter your Password" 
                            required 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Re-type Password</label>
                        <input 
                            type="password" 
                            value={repassword} 
                            onChange={(e) => setRepassword(e.target.value)} 
                            placeholder="Re-enter your Password" 
                            required 
                        />
                    </div>

                    <button type="submit">Signup</button>
                </form>

                <h4>
                    <Link to="/" className="text-black no-underline hover:text-gray-600">Already have an account? Login here.</Link>
                </h4>

                
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </div>
        </div>
        </div>
    );
};

export default Signup;
