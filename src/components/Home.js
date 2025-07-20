import React from 'react';
import '../App.css';
import heroImage from '../images/all.jpg';

function Home() {
    return (

        <section className="home-section">
            <img src={heroImage} alt="Petstore Hero" className="home-hero-image" />
            <div className="home-overlay">
                <h1>Welcome to HappyPaws Petstore</h1>
                <p>Find your perfect companion and trusted pet products here.</p>
            </div>
        </section>
    );
}

export default Home;
