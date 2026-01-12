import React from 'react';

// Import gambar lo tetep sama
import Laravel from '../assets/Laravel.jpg';
import Reaks from '../assets/React.jpeg';
import Js from '../assets/JavaScript.jpg';
import Figma from '../assets/Figma.jpg';
import Python from '../assets/Python.jpeg';
import Php from '../assets/Php.jpeg';

const Skills = () => {
    const skillsData = [
        { name: "Laravel", img: Laravel },
        { name: "React", img: Reaks },
        { name: "JavaScript", img: Js },
        { name: "Python", img: Python },
        { name: "UI/UX", img: Figma },
        { name: "PHP", img: Php },
    ];

    return (
        <div className="skills-section">
            <h3 className="section-title">Podium Skills</h3>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                        <h2 className="skill-name">{skill.name}</h2>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Skills;