import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { auth, db } from "../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Toast } from "primereact/toast";
import { HOME_SCREEN_IMG } from "../../asset/constants";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Saving the username to Firestore
            await setDoc(doc(db, "users", user.uid), {
                username,
                email,
            });
            setUsername('');
            setEmail('');
            setPassword('');
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'User Registered Successfully!' });
        } catch (error) {
            console.log("Registration Error", error);
            if (error.code === 'auth/email-already-in-use') {
                toast.current.show({ severity: 'error', summary: 'Registration Error', detail: 'This email is already registered. Please try logging in.' });
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: error.message });
            }
        }
    };

    return (
        <div className="main">
            <Toast ref={toast} />
            <img 
                src={HOME_SCREEN_IMG + "Veggies_new.png"} 
                alt="Left" 
                className="veggiesImg"
            />
            <img 
                src={HOME_SCREEN_IMG + "Sushi_replace.png"} 
                alt="Right" 
                className="sushiImg"
            />
            <Card className="z-1 p-2 w-auto">
                <form className="signup-form" onSubmit={submitForm}>
                    <h2>Register</h2>
                    <div className="p-field flex flex-column">
                        <label htmlFor="username">Username</label>
                        <InputText 
                            id="username" 
                            type="text" 
                            value={username}
                            placeholder="Enter your username" 
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <br />
                    <div className="p-field flex flex-column">
                        <label htmlFor="email">Email</label>
                        <InputText 
                            id="email" 
                            type="email" 
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="p-field flex flex-column">
                        <label htmlFor="password">Password</label>
                        <Password 
                            id="password" 
                            value={password}
                            placeholder="Enter your password" 
                            toggleMask 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br />
                    <Button type="submit" label="Register" icon="pi pi-user" className="p-button-sm mt-2"/>
                    <p>Already Registered? <Link to="/auth/login">Login</Link></p>
                </form>
            </Card>
        </div>
    );
};

export default Register;
