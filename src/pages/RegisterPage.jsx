import { useState } from "react";
import { Link } from "react-router-dom";


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-56">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" >
                    <input 
                        type="text"
                        placeholder="Shivansh"
                    />
                    <input 
                        type="email"
                        placeholder="your@email.com" 
                    />
                    <input 
                        type="password"
                        placeholder="password" 
                    />
                    <button className="primary" type="submit">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a Member? 
                        <Link to="/login" className="underline text-black">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
