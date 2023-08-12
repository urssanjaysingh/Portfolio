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

                    <section className="portfolio-block photography">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-md-12 col-lg-12 item">
                                    <h2 className="text-center">MERN Stack Web Development</h2>
                                    <p className="text-center">MERN is an acronym for MongoDB, Express, React, and Node.js. These are the technologies that I use to create dynamic and responsive web applications. MongoDB is a NoSQL database that stores data in JSON-like documents. Express is a web framework that handles routing, middleware, and API endpoints. React is a front-end library that renders user interfaces with reusable components. Node.js is a runtime environment that executes JavaScript code on the server-side.</p>
                                    <p className="text-center">I have experience in building full-stack web applications using the MERN stack. Some of the projects that I have worked on are:</p>
                                    <ul className="text-center">
                                        <li>A blog site where users can create, edit, and delete posts, as well as comment and like other posts.</li>
                                        <li>A social media platform where users can create profiles, follow other users, share posts, and chat with each other.</li>
                                        <li>An e-commerce site where users can browse products, add them to cart, checkout, and make payments.</li>
                                    </ul>
                                    <p className="text-center">You can check out some of my MERN stack projects on my GitHub page or on my portfolio site. I am always eager to learn new technologies and improve my skills as a web developer.</p>
                                </div>
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
