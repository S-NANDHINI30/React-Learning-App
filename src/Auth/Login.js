import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { HOME_SCREEN_IMG } from "../../asset/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useRef(null);
    const navigate = useNavigate();

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Login successful!' });
            navigate("/app");
        } catch (error) {
            console.error("Login failed: ", error.message);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Invalid email or password. Please try again.' });
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
                <form className="login-form" onSubmit={submitForm}>
                    <h2>Login</h2>
                    <div className="login-container">
                        <div className="p-field flex flex-column">
                            <label htmlFor="email">Email</label>
                            <InputText 
                                id="email" 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <br />
                        <div className="p-field flex flex-column">
                            <label htmlFor="password">Password</label>
                            <Password 
                                id="password"
                                placeholder="Enter your password" 
                                value={password}
                                feedback={false}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <br />
                    <Button label="Login" icon="pi pi-sign-in" className="p-button-sm mt-2" />
                    <p>Create an Account <Link to="/auth/signUp">Register Here</Link></p>
                </form>
            </Card>
        </div>
    );
};

export default Login;
