import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Import Gambar Project Lo (Ganti sama screenshot HookUP asli ya!)
import HookUpImg from '../assets/Laravel.jpg'; // <-- Placeholder
import PortfolioImg from '../assets/React.jpeg'; // <-- Placeholder

const Projects = () => {
    // DATA PROJECT
    const projectsData = [
        {
            id: 1,
            title: "HookUP E-Commerce",
            desc: "Platform e-commerce alat pancing dengan desain UI/UX Human-Centric. Fitur lengkap mulai dari katalog, keranjang belanja, hingga sistem checkout yang seamless.",
            img: HookUpImg,
            tags: ["Laravel", "React", "MySQL", "Figma"],
            links: {
                demo: "https://bit.ly/Prototype-HookUP",
                github: "https://github.com/username/hookup"
            }
        },
        {
            id: 2,
            title: "Cyber Portfolio",
            desc: "Website portofolio pribadi dengan tema Cyberpunk/Dark Mode. Dibangun menggunakan React JS, Framer Motion, dan CSS Glassmorphism.",
            img: PortfolioImg,
            tags: ["React", "Vite", "Animation", "CSS3"],
            links: {
                demo: "#",
                github: "#"
            }
        },
    ];

    return (
        <section className="projects-section">
            {/* Judul Section (Pake class yg udah ada di index.css kemarin) */}
            <h2 className="section-title">
                Featured <span className="highlight-text">Projects</span>
            </h2>

            {/* Grid Container */}
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;