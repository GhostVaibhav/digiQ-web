import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        }
        catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return (
        <div>
            <form className="container flex my-5 py-2 px-5 bg-light rounded shadow" style={{ maxWidth: "400px", fontFamily: "Inter" }} onSubmit={handleSubmit}>
                <h1 className="text-center m-3" style={{fontWeight: 700}}>Log In</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} autoComplete="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="new-password" ref={passwordRef} required />
                </div>
                <button disabled={loading} type="submit" className="w-100 btn btn-primary">
                    {loading && <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>}
                    Login
                </button>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                {error && <p className="my-3 form-text text-center text-danger">{error}</p>}
                <div id="emailHelp" className="text-center my-3">Need an account? <Link to="/signup">Signup</Link></div>
            </form>
        </div>
    )
}
