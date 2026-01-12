import React from 'react';
import Laravel from '../assets/Laravel.jpg';
import Reaks from '../assets/React.jpeg'
import Js from '../assets/JavaScript.jpg'
import Figma from '../assets/Figma.jpg'
import Python from '../assets/Python.jpeg'
import Php from '../assets/Php.jpeg'

const Skills = () => {
    return (
        <div className="skills-grid">
            <div className="skills">

                <div className="skills1">
                    <img src={Laravel} alt=""/>
                    <div className="skills1-sub">
                    <h2>Laravel</h2>
                    </div>
                </div>
                <div className="skills2">
                    <img src={Reaks} alt="" />
                    <div className="skills2-sub">
                    <h2>React</h2>
                    </div>
                </div>
                <div className="skills3">
                    <img src={Js} alt="" />
                    <div className="skills3-sub">
                    <h2>JavaScript</h2>
                    </div>
                </div>
                <div className="skills4">
                    <img src={Python} alt="" />
                    <div className="skills4-sub">
                    <h2>Python</h2>
                    </div>
                </div>
                <div className="skills5">
                    <img src={Figma} alt="" />
                    <div className="skills5-sub">
                    <h2>UI/UX</h2>
                    </div>
                </div>
                <div className="skills6">
                    <img src={Php} alt="" />
                    <div className="skills6-sub">
                    <h2>PHP</h2>
                    </div>
                </div>
                <img src="" alt="" />
            </div>
        </div>

    );
}

export default Skills