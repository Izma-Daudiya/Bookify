import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const firebase = useFirebase()
    const {signinUserWithEmailAndPassword, signinWithGoogle, isLoggedIn} = useFirebase()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        if(isLoggedIn){
            navigate("/")
        }
    },[firebase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sign In")
        const result = await signinUserWithEmailAndPassword(email, password)
        console.log("Success", result)
    }
    
    return (
        <>
            <div className="container mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
                <h1 className="mt-5 mb-5">OR</h1>
                <Button variant="danger" onClick={signinWithGoogle}>Sign In with Google</Button>
            </div>
        </>
    )
}