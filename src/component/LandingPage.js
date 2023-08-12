import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <div>
                <main className="page lanidng-page">
                    <section className="portfolio-block block-intro">
                        <div className="container">
                            <div className="avatar" style={{ backgroundImage: "url('img/avatars/avatar.jpg')" }}></div>
                            <div className="about-me">
                                <p>
                                    Hello! I am <strong>Sanjay Singh</strong>.<br />
                                    <span style={{ color: "rgb(36, 41, 47)" }}>
                                        I am a final year B. Tech. Computer Science Engineering student, constantly learning and exploring new technologies in the world of software development.
                                    </span>
                                </p>
                                <Link className="btn btn-outline-primary" role="button" to="/hire-me">Hire me</Link>
                            </div>
                        </div>
                    </section>

                    <section className="portfolio-block block-intro border-bottom">
                        <div className="container">
                            <div className="avatar" style={{ backgroundImage: "url('img/avatars/avatar.jpg')" }}></div>
                            <div className="about-me">
                                <h1 className="display-4">Hi, I'm Sanjay Singh</h1>
                                <p className="lead">
                                    A passionate Computer Science Engineering student with a drive for web development and software engineering. I'm currently pursuing my B.Tech degree at Dev Bhoomi Group of Institutions, Saharanpur, affiliated with Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
                                </p>
                                <p>
                                    From coding to designing, I'm on a journey to bring innovative ideas to life in the digital realm. My dedication to learning and my curiosity about the ever-evolving tech landscape fuel my enthusiasm for creating clean, functional, and user-friendly applications.
                                </p>
                                <Link className="btn btn-primary btn-lg" role="button" to="/hire-me">Hire me</Link>
                            </div>
                        </div>
                    </section>

                    {/* <section className="portfolio-block photography">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-4 item zoom-on-hover">
                                    <Link to="#"><img className="img-fluid image" src="img/main/html.jpg" alt="HTML" /></Link>
                                </div>
                                <div className="col-md-6 col-lg-4 item zoom-on-hover">
                                    <Link to="#"><img className="img-fluid image" src="img/main/mern.jpg" alt="MERN" /></Link>
                                </div>
                                <div className="col-md-6 col-lg-4 item zoom-on-hover">
                                    <Link to="#"><img className="img-fluid image" src="img/main/software.jpg" alt="Software" /></Link>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="portfolio-block call-to-action border-bottom">
                        <div className="container">
                            <div className="d-flex justify-content-center align-items-center content">
                                <h3>Like what you see?</h3>
                                <Link to="/hire-me">
                                    <button className="btn btn-outline-primary btn-lg" type="button">
                                        Hire me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="portfolio-block skills">
                        <div className="container">
                            <div className="heading">
                                <h2>Special Skills</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card special-skill-item border-0">
                                        <div className="card-header bg-transparent border-0">
                                            <i className="icon ion-ios-star-outline"></i>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">Web Design</h3>
                                            <p className="card-text">
                                                Proficient in HTML, CSS, and Bootstrap, I have a solid foundation in web design principles. I create visually appealing and responsive web interfaces with a focus on effective user experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card special-skill-item border-0">
                                        <div className="card-header bg-transparent border-0">
                                            <i className="icon ion-ios-lightbulb-outline"></i>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">Backend Development</h3>
                                            <p className="card-text">
                                                Proficient in backend development, I utilize JavaScript along with frameworks like Express.js and Node.js to build robust server-side solutions. Additionally, I have experience in Java Servlets for creating dynamic web applications and managing server-side logic efficiently.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card special-skill-item border-0">
                                        <div className="card-header bg-transparent border-0">
                                            <i className="icon ion-ios-gear-outline"></i>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">Database Management</h3>
                                            <p className="card-text">
                                                Proficient in MySQL Server, MySQL Workbench, and MongoDB, I excel in database management. I design, create, and optimize databases while ensuring data integrity, efficient storage, and seamless retrieval through proficient SQL querying.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <section className="portfolio-block website gradient">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-5 offset-lg-1 text">
                                <h3>MERN Stack Project</h3>
                                <p>
                                    As part of my journey, I created a powerful note management system called techNotes using the MERN (MongoDB, Express.js, React, Node.js) stack. This application offers an advanced and efficient digital solution, replacing traditional sticky note systems. techNotes features include a user-friendly interface, role-based access control, efficient note creation and assignment, and comprehensive tracking. With seamless navigation and responsive design, techNotes streamlines communication and organization within any environment.
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-5">
                                <a href="https://technotes-y30i.onrender.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="portfolio-laptop-mockup">
                                        <div className="screen">
                                            <div className="screen-content" style={{ backgroundImage: "url('img/mern/screenshot.png')" }}></div>
                                        </div>
                                        <div className="keyboard"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default LandingPage
