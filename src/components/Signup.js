import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div>
            <form className="container flex my-5 py-2 px-5 bg-light rounded shadow" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
                <h1 className="text-center m-3">Sign Up</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} autoComplete="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="new-password" ref={passwordRef} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="new-password" ref={confirmPasswordRef} required />
                </div>
                <button disabled={loading} type="submit" className="w-100 btn btn-primary">Signup</button>
                {error && <p className="my-3 form-text text-center text-danger">{error}</p>}
                <div id="emailHelp" className="text-center my-3">Already have an account? <Link to="/login">Login</Link></div>
            </form>
        </div>
    )
}
