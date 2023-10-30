import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useTitle from '../hooks/useTitle';

// Projects page component
const ProjectsPage = () => {
    useTitle('Projects');

    const projects = [
		{
            title: 'ShopNest',
            description: 'A E-commerce website.',
            githubLink: 'https://github.com/urssanjaysingh/ShopNest',
            tags: ['MERN']
        },
        {
            title: 'TaskSync',
            description: 'A project management platform.',
            githubLink: 'https://github.com/urssanjaysingh/TaskSync',
            tags: ['MERN']
        },
        {
            title: 'FlexiBlog',
            description: 'An blogging website platform.',
            githubLink: 'https://github.com/urssanjaysingh/FlexiBlog',
            tags: ['MERN']
        },
        {
            title: 'MERN Stack Project',
            description: 'A powerful note management system.',
            githubLink: 'https://github.com/urssanjaysingh/MERN-Stack-Project',
            tags: ['MERN']
        },
        {
            title: 'Tacos Website',
            description: 'A static website showcasing taco recipes.',
            githubLink: 'https://github.com/urssanjaysingh/CSS/tree/main/027.%20CSS%20Projects/062.%20Tacos%20Website',
            tags: ['HTML']
        },
        {
            title: 'ATM-System',
            description: 'A project of Java on ATM.',
            githubLink: 'https://github.com/urssanjaysingh/ATM-System',
            tags: ['Java']
        },
        {
            title: 'Employee Management System',
            description: 'A project to manage employees.',
            githubLink: 'https://github.com/urssanjaysingh/Employee-Management-System',
            tags: ['Python']
        },
        {
            title: 'Movie Ticket Booking',
            description: 'A C++ project for booking movie tickets.',
            githubLink: 'https://github.com/urssanjaysingh/Movie-Tickets-Booking-System',
            tags: ['C++']
        },
        {
            title: 'Bank Management System',
            description: 'A project for managing bank operations.',
            githubLink: 'https://github.com/urssanjaysingh/Bank-Management-System',
            tags: ['C']
        },
    ];

    return (
        <>
            <Header />
            <main className="page projets-page">
                <section className="portfolio-block project-no-images">
                    <div className="container">
                        <div className="heading">
                            <h2>Recent Work</h2>
                        </div>
                        <div className="row">
                            {projects.map((project, index) => (
                                <div className="col-md-6 col-lg-4" key={index}>
                                    <div className="project-card-no-image">
                                        <h3>{project.title}</h3>
                                        <h4>{project.description}</h4>
                                        <Link className="btn btn-outline-primary btn-sm" to={project.githubLink}>See More</Link>
                                        <div className="tags">
                                            {project.tags.map((tag, tagIndex) => (
                                                <Link key={tagIndex} style={{ textDecoration: 'none' }} to="#">{tag}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
