import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <div className="container d-flex flex-column align-items-center" style={{ fontFamily: "Inter" }}>
            <h1 className="my-3" style={{ fontWeight: 700 }}>
                Pricing
            </h1>
            <div class="card border-primary mt-3 text-center" style={{ maxWidth: "18rem" }}>
                <div class="card-header text-white bg-primary border-primary">Free for everyone</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">₹0</h5>
                    <p class="card-text"><Link to="/">digiFin</Link> is licensed under <a href="https://github.com/GhostVaibhav/digifin-web-frontend/blob/main/LICENSE">MIT license</a> and is open to everyone.</p>
                </div>
                <div class="card-footer bg-light border-primary">
                    <Link to="/signup" style={{ textDecoration: "None" }}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}
