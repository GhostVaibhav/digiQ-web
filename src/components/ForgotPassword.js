import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }
        catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }
    return (
        <div>
            <form className="container flex my-5 py-2 px-5 bg-light rounded shadow" style={{ maxWidth: "400px", fontFamily: "Inter" }} onSubmit={handleSubmit}>
                <h1 className="text-center m-3" style={{fontWeight: 700}}>
                    Forgot Password
                </h1>
                {message && <div className="alert alert-success" role="alert">{message}</div>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} autoComplete="username" required />
                </div>
                <button disabled={loading} type="submit" className="w-100 btn btn-primary">
                    {loading && <span class="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>}
                    Reset Password
                </button>
                <div className="w-100 text-center mt-3">
                <Link to="/login">&larr; Back to Login</Link>
                </div>
                {error && <p className="my-3 form-text text-center text-danger">{error}</p>}
                <div id="emailHelp" className="text-center my-3">Need an account? <Link to="/signup">Signup</Link></div>
            </form>
        </div>
    )
}
