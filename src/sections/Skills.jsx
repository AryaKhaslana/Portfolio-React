import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/TiltCard';

import Laravel from '../assets/Laravel.jpg';
import Reaks from '../assets/React.jpeg';
import Js from '../assets/JavaScript.jpg';
import Figma from '../assets/Figma.jpg';
import Python from '../assets/Python.jpeg';
import Php from '../assets/Php.jpeg';

const Skills = () => {
    const skillsData = [
        { name: "Laravel", img: Laravel, color: "#FF2D20", cat: "Backend" },
        { name: "React", img: Reaks, color: "#61DAFB", cat: "Frontend" },
        { name: "JavaScript", img: Js, color: "#F7DF1E", cat: "Frontend" },
        { name: "Python", img: Python, color: "#3776AB", cat: "Backend" },
        { name: "UI/UX", img: Figma, color: "#F24E1E", cat: "Design" },
        { name: "PHP", img: Php, color: "#777BB4", cat: "Backend" },
    ];

    const [filter, setFilter] = useState("All");

    const filteredSkills = filter === "All" 
        ? skillsData 
        : skillsData.filter(skill => skill.cat === filter);

    const categories = ["All", "Frontend", "Backend", "Design"];

    return (
        // Pake class 'skills-section' dari CSS
        <div className="skills-section">
            <h3 className="section-title">
                Podium <span className="highlight-text">Skills</span>
            </h3>

            {/* Filter Container */}
            <div className="filter-container">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        // Logic class active manual pake CSS
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            
            {/* Grid Container */}
            <motion.div 
                layout 
                className="skills-grid"
            >
                <AnimatePresence>
                    {filteredSkills.map((skill) => (
                        <motion.div
                            layout
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TiltCard skill={skill} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default Skills;