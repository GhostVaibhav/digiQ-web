import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function Team() {
    const { currentUser } = useAuth();
    return (
        <div className="d-flex container my-4" style={{ fontFamily: "Inter" }}>
            <div className="w-50 mx-2">
                <Link to="/team" style={{ textDecoration: "None" }}>
                    <div className="btn btn-outline-success d-flex">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h2 className="fw-bold card-title">Meet the team</h2>
                                <h2 className="fw-bold card-title">&rarr;</h2>
                            </div>
                            <p className="card-text">Meet the team behind this project</p>
                        </div>
                    </div>
                </Link>
            </div>
            {currentUser ? 
                <div className="w-50 mx-2">
                    <Link to="/dashboard" style={{ textDecoration: "None" }}>
                        <div className="btn btn-danger d-flex">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h2 className="fw-bold card-title">Go to dashboard</h2>
                                    <h2 className="fw-bold card-title">&rarr;</h2>
                                </div>
                                <p className="card-text">Go to your account page</p>
                            </div>
                        </div>
                    </Link>
                </div>
                :
                <div className="w-50 mx-2">
                    <Link to="/login" style={{ textDecoration: "None" }}>
                        <div className="btn btn-danger d-flex">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h2 className="fw-bold card-title">Login / Signup</h2>
                                    <h2 className="fw-bold card-title">&rarr;</h2>
                                </div>
                                <p className="card-text">Login or Signup to get started and start seeing your daily stats</p>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}
