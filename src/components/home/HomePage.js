import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../common/Slider";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import "animate.css";
import "./HomePage.css";

const HomePage = () => {
    const slideImages = [slide1, slide2, slide3];
    useEffect(() => {
        const interval = setInterval(() => {
            const titleElement = document.querySelector(".centered-title div");
            if (titleElement) {
                titleElement.classList.add("animate__fadeInDown");

                setTimeout(() => {
                    titleElement.classList.remove("animate__fadeInDown");
                }, 1000);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="home-page">
            <header className="hero-section">
                <Slider slideImages={slideImages} />
                <div className="centered-content">
                    <div className="centered-title">
                        <div className="animate__animated animate__fadeInDown">
                            <span className="red-letter">C</span>RYPTOS
                            <span className="red-letter">C</span>
                            AN&nbsp;SOFTWARE
                        </div>
                    </div>
                </div>
                <h1>Welcome to Euler Software</h1>
                <p>Transforming the future with AI-powered trading</p>
                <Link to="/about" className="btn btn-primary">
                    Learn More
                </Link>
            </header>

            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>

            <section className="testimonial-section">
                <h2>Testimonials</h2>
                {/* Add testimonial content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>
            <section className="feature-section">
                <h2>Our Features</h2>
                {/* Add feature content here */}
            </section>

            {/* Add more sections as needed */}
        </div>
    );
};

export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => (
//     <div className="jumbotron">
//         <h1>Pluralsight Administration</h1>
//         <p>React, Redux and React Router for ultra-responsive web apps.</p>
//         <Link to="about" className="btn btn-primary btn-lg">
//             Learn more
//         </Link>
//     </div>
// );

// export default HomePage;
