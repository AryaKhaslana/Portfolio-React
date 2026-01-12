import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="project-card" // Class CSS Manual
        >
            {/* 1. GAMBAR COVER */}
            <div className="project-img-wrapper">
                <img 
                    src={project.img} 
                    alt={project.title} 
                    className="project-img" 
                />
                
                {/* Overlay Hitam (Muncul pas Hover) */}
                <div className="img-overlay">
                    <div className="btn-container">
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-action btn-demo">
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-action btn-code">
                            <FaGithub /> Code
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. KONTEN (Judul & Deskripsi) */}
            <div className="project-content">
                <h3 className="project-title">
                    {project.title}
                </h3>
                
                <p className="project-desc">
                    {project.desc}
                </p>

                {/* 3. TECH STACK (Tags) */}
                <div className="project-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="tech-tag">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;