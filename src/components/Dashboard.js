import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory();
    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        }
        catch {
            setError("Failed to log out")
        }
    }
    return (
        <div>
            <div className="container card shadow text-center mt-5">
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    {error && <p className="card-text">{error}</p>}
                    <h6 className="card-subtitle mb-2 text-muted">Email: {currentUser.email}</h6>
                    <Link to="/update">
                        <button className="btn btn-primary mx-2" variant="link">
                        Update Profile
                        </button>
                    </Link>
                    <button className="btn btn-primary mx-2" variant="link" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
