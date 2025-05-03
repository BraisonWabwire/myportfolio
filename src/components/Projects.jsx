import React from 'react';
import './Projects.css';
import PortfolioImage from '../assets/portfolio.png'; // Replace with your image URL
import ECommerceImage from '../assets/ecommerce.png'; // Replace with your image URL
import TaskImage from '../assets/task.png'; // Replace with your image URL
import ELearningImage from '../assets/ELearning.png'; // Replace with your image URL

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce web application with user authentication, product filtering, and secure payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: ECommerceImage, // Replace with actual image
            liveLink: 'https://example.com', // Replace with live demo link
            repoLink: 'https://github.com/BraisonWabwire/Micro-learn', // Replace with repo link
        },
        {
            title: 'Task Management App',
            description:
                'A productivity app for managing tasks with features like drag-and-drop, due dates, and team collaboration.',
            technologies: ['React', 'Firebase', 'Tailwind CSS'],
            image: TaskImage, // Replace with actual image
            liveLink: 'https://example.com', // Replace with live demo link
            repoLink: 'https://github.com/yourusername/task-app', // Replace with repo link
        },
        {
            title: 'Portfolio Website',
            description:
                'A personal portfolio showcasing my projects, skills, and contact information with a modern, responsive design.',
            technologies: ['React', 'CSS', 'Vite'],
            image: PortfolioImage, // Replace with actual image
            liveLink: 'https://example.com', // Replace with live demo link
            repoLink: 'https://github.com/yourusername/portfolio', // Replace with repo link
        },
        {
            title: 'E-Learning Website',
            description:
                'An elerning website built for my fourth year project showcasing my skills. Enabling students to enroll and access course materials.',
            technologies: ['Django', 'HTML', 'CSS'],
            image: ELearningImage, // Replace with actual image
            liveLink: 'https://example.com', // Replace with live demo link
            repoLink: 'https://github.com/BraisonWabwire/Micro-learn', // Replace with repo link
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-button">
                                        View Live
                                    </a>
                                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="overlay-button">
                                        View Code
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;