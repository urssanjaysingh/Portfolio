import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import useTitle from '../hooks/useTitle'

const AboutMePage = () => {
    useTitle('About Me')

    return (
        <>
            <Header />
            <main className="page cv-page">
                <section className="portfolio-block block-intro border-bottom">
                    <div className="container">
                        <div className="avatar" style={{ backgroundImage: "url('img/avatars/avatar.jpg')" }}></div>
                        <div className="about-me">
                            <h1 className="display-4">Hi, I'm Sanjay Singh</h1>
                            <h2 className="text-center">My Journey in Software Development</h2>
                            <p>
                                Throughout my journey, I've embarked on a path of continuous learning and exploration in the realm of software development. From the early days of coding simple scripts to creating complex web applications, every step has been a learning experience.
                            </p>
                            <p>
                                I've dived into various technologies and languages, experimenting with Python, Java, and JavaScript. I've built interactive websites, participated in hackathons, and collaborated on open-source projects.
                            </p>
                            <p>
                                Each project has added a new dimension to my skill set. Whether it's the thrill of solving intricate problems, the joy of designing elegant user interfaces, or the satisfaction of building scalable backend systems, I embrace every challenge.
                            </p>
                            <p>
                                Join me in this exciting journey as I continue to push boundaries, harness the power of innovation, and contribute to the ever-evolving landscape of software development.
                            </p>
                            <Link className="btn btn-primary btn-lg" role="button" to="/hire-me">Hire me</Link>
                        </div>
                    </div>
                </section>
                <section className="portfolio-block cv">
                    <div className="container">
                        <div className="work-experience group">
                            <div className="heading">
                                <h2 className="text-center">Experience</h2>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Computer Science &amp; Engg. Student</h3>
                                        <h4 className="organization">
                                            Dev Bhoomi Group of Institutions, Saharanpur
                                        </h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="period">09/2020 - Present</span>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    Pursuing my B. Tech here and currently I'm in 6th semester of 3rd year.
                                </p>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Volunteer</h3>
                                        <h4 className="organization">
                                            Dev Bhoomi Group of Institutions, Saharanpur
                                        </h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="period">July 2023 - July 2023</span>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    Worked as Student Volunteer in 10th Mega Job Fair 2023 at Dev Bhoomi Campus Saharanpur.
                                </p>
                            </div>
                        </div>
                        <div className="education group">
                            <div className="heading">
                                <h2 className="text-center">Education</h2>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Graduation</h3>
                                        <h4 className="organization">
                                            Dr. A.P.J. Abdul Kalam Technical University, Lucknow
                                        </h4>
                                    </div>
                                    <div className="col-6">
                                        <span className="period"><strong>09/2020 - Present</strong></span>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    Currently Pursuing my B. Tech in Computer Science Engineering
                                    here.
                                </p>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3><strong>Intermediate</strong></h3>
                                        <h4 className="organization">
                                            Dr. B.R Ambedkar Inter College ,&nbsp; Gyanagarh
                                        </h4>
                                    </div>
                                    <div className="col-md-6"><span className="period">2018</span></div>
                                </div>
                                <p className="text-muted">
                                    Completed my Higher Secondary Education from here.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="skills portfolio-info-card">
                                        <h2>Skills</h2>
                                        <h3>HTML</h3>
                                        <div className="progress">
                                            <div className="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>
                                                <span className="visually-hidden">100%</span>
                                            </div>
                                        </div>
                                        <h3>CSS</h3>
                                        <div className="progress">
                                            <div className="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                                <span className="visually-hidden">90%</span>
                                            </div>
                                        </div>
                                        <h3>JavaScript</h3>
                                        <div className="progress">
                                            <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                                <span className="visually-hidden">80%</span>
                                            </div>
                                        </div>
                                        {/* Add more skills */}
                                        <h3>React</h3>
                                        <div className="progress">
                                            <div className="progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                                <span className="visually-hidden">75%</span>
                                            </div>
                                        </div>
                                        <h3>Node.js</h3>
                                        <div className="progress">
                                            <div className="progress-bar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                                <span className="visually-hidden">85%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div id="contact" className="contact-info portfolio-info-card">
                                        <h2>Contact Info</h2>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-android-calendar icon"></i>
                                            </div>
                                            <div className="col-9"><span>26/11/2000</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-person icon"></i>
                                            </div>
                                            <div className="col-9"><span>Sanjay Singh</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-ios-telephone icon"></i>
                                            </div>
                                            <div className="col-9"><span>+91 8630-570916</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1"><i className="icon ion-at icon"></i></div>
                                            <div className="col-9">
                                                <span>sanjaysingh26112000@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-social-linkedin"></i>
                                            </div>
                                            <div className="col-9">
                                                <a href="https://www.linkedin.com/in/urssanjaysingh">LinkedIn</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-social-github"></i>
                                            </div>
                                            <div className="col-9">
                                                <a href="https://github.com/urssanjaysingh">GitHub</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-social-facebook"></i>
                                            </div>
                                            <div className="col-9">
                                                <a href="https://www.facebook.com/urssanjaysingh">Facebook</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-1">
                                                <i className="icon ion-social-instagram-outline"></i>
                                            </div>
                                            <div className="col-9">
                                                <a href="https://www.instagram.com/urssanjaysingh/">Instagram</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hobbies group">
                            <div className="heading">
                                <h2 className="text-center">Hobbies</h2>
                            </div>
                            <p className="text-center text-muted">
                                Aspiring web developer with a passion for continuous learning and innovation. My hobbies align closely with my love for technology and coding. When I'm not working on projects, you'll find me engaging in activities that enhance my skills and knowledge, such as exploring new programming languages and frameworks, contributing to open-source projects, and staying up-to-date with the latest industry trends.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutMePage;
