import React from 'react'
import { Link } from 'react-router-dom'

export default function Introduction() {
    return (
        <div className="container my-4" style={{ fontFamily: "Inter" }}>
            <Link to="/introduction" style={{textDecoration: "None"}}>
                <div className="btn btn-outline-primary d-flex">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h2 className="fw-bold card-title">Have a sneak peek behind the scenes?</h2>
                            <h2 className="fw-bold card-title">&rarr;</h2>
                        </div>
                        <p className="card-text">Want to have a sneak peek behind the technologies which were used for the construction of this site?</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
