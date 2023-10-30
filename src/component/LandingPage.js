import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

const LandingPage = () => {
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
            <div>
                <main className="page lanidng-page">
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
                            <div className="avatar" style={{ backgroundImage: "url('img/avatars/avatar.jpg')", marginTop: "20px" }}></div>
                            <div className="about-me animated-text">
                                <h1 className="display-4">{typedText}</h1>
                                <p className="lead">
                                    A final year B.Tech. Computer Science Engineering student with a passion for innovation and technology.
                                </p>
                                <p>
                                    I'm on a journey to discover and apply the latest trends in software development. Exploring new technologies, solving challenging problems, and building elegant solutions is what fuels my enthusiasm.
                                </p>
                                <Link className="btn btn-primary btn-lg" role="button" to="/hire-me">
                                    Hire me
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
						<h3>Your Ultimate Shopping Destination</h3>
						<p>
						  In my journey of innovation, I've conceived a remarkable MERN project. Powered by the prowess of React, Node.js, and MongoDB, this project empowers users with a versatile and dynamic platform. With a sleek and intuitive user interface, it provides an ideal space for users to unleash their creativity. This project is your canvas for endless possibilities, making it a haven for creative expression. Step into a world of flexibility and responsiveness with our MERN project today.
						</p>
					  </div>
					  <div className="col-md-12 col-lg-5">
						<a href="https://shopnest-jjzh.onrender.com/" target="_blank" rel="noopener noreferrer">
						  <div className="portfolio-laptop-mockup">
							<div className="screen">
							  <div className="screen-content" style={{ backgroundImage: "url('img/mern/Screenshot3.png')" }}></div>
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
