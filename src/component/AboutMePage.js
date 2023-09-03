import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import useTitle from '../hooks/useTitle'

const AboutMePage = () => {
    useTitle('About Me')

    const leadStyles = {
        fontSize: '1.5rem',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
        color: '#333',
        fontWeight: 'bold',
    };

    const regularTextStyles = {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        color: '#555',
    };

    const [typedText, setTypedText] = useState('');
    const fullText = "Hi, I'm Sanjay Singh";

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Typing speed (in milliseconds)

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <>
            <Header />
            <main className="page cv-page">
                <section className="portfolio-block block-intro border-bottom">
                    <style>
                        {`
                    .animated-text {
                        opacity: 0;
                        transform: translateY(20px);
                        animation: fadeAndSlideIn 1s ease forwards;
                    }

                    @keyframes fadeAndSlideIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
                    </style>
                    <div className="container">
                        <div className="avatar" style={{ backgroundImage: "url('img/avatars/avatar.jpg')" }}></div>
                        <div className="about-me animated-text">
                            <h1 className="display-4">{typedText}</h1>
                            <p className="lead" style={leadStyles}>
                                A passionate Computer Science Engineering student with a drive for web development and software engineering. I'm currently pursuing my B.Tech degree at Dev Bhoomi Group of Institutions, Saharanpur, affiliated with Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
                            </p>
                            <p style={regularTextStyles}>
                                From coding to designing, I'm on a journey to bring innovative ideas to life in the digital realm. My dedication to learning and my curiosity about the ever-evolving tech landscape fuel my enthusiasm for creating clean, functional, and user-friendly applications.
                            </p>
                            <Link className="btn btn-primary btn-lg" role="button" to="/hire-me">
                                Hire me
                            </Link>
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
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Full Stack Web Development Virtual Intern</h3>
                                        <h4 className="organization">
                                            Bharat Intern
                                        </h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="period">May 2023 - August 2023</span>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    During my virtual internship at Bharat Intern, I had the incredible opportunity to dive deep into the world of Full Stack Web Development. This immersive experience allowed me to explore the latest technologies and gain hands-on experience in building dynamic web applications.
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
