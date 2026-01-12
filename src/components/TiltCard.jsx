import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ skill }) => {
    const ref = useRef(null);

    // 1. Pake MotionValue (Gak bikin re-render React)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // 2. Pake Spring biar gerakannya mulus (ada mentul-mentul dikit)
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // 3. Transformasi rotasi berdasarkan posisi mouse
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        // Hitung persentase posisi mouse (-0.5 sampai 0.5)
        const xPct = (mouseXPos / width) - 0.5;
        const yPct = (mouseYPos / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX, // Langsung dipasang di sini
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="skill-card relative"
        >
            <div style={{ transform: "translateZ(50px)" }} className="card-content-3d">
                <div className="icon-wrapper">
                    <img src={skill.img} alt={skill.name} className="skill-icon" />
                </div>
                <h2 className="skill-name">{skill.name}</h2>
            </div>

            <div 
                className="card-glow"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${skill.color}33, transparent 70%)`
                }}
            />
        </motion.div>
    );
};

export default TiltCard;