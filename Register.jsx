import React, { useState } from "react";
export const Register = (props) => {
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <div>Register</div>
        <form className="register-form"onSubmit ={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) =>setName(e.target.value)}name="name" id="name" placeholder="Your Full Name"></input>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Your Email" id="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your Password" id="password" name="password"></input>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick ={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}