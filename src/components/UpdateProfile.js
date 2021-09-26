import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(currentUser, emailRef.current.value))
        }
        if(passwordRef.current.value !== "") {
            promises.push(updatePassword(currentUser, passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/dashboard')
        }).catch((err) => {
            setError(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <div>
            <form className="container flex my-5 py-2 px-5 bg-light rounded shadow" style={{ maxWidth: "400px", fontFamily: "Inter" }} onSubmit={handleSubmit}>
                <h1 className="text-center m-3" style={{ fontWeight: 700 }}>Update Profile</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef} autoComplete="username" required defaultValue={currentUser.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="new-password" ref={passwordRef} placeholder="Leave blank to keep same" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" autoComplete="new-password" ref={confirmPasswordRef} placeholder="Leave blank to keep same" />
                </div>
                <button disabled={loading} type="submit" className="w-100 btn btn-primary">
                    {loading && <span className="spinner-border spinner-border-sm mx-1" role="status" aria-hidden="true"></span>}
                    Update
                </button>
                {error && <p className="my-3 form-text text-center text-danger">{error}</p>}
                <div id="emailHelp" className="text-center my-3">
                    <Link to="/dashboard">
                        Cancel updation
                    </Link>
                </div>
            </form>
        </div>
    )
}
