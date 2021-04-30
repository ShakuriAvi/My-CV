import React from "react";
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Skills.Module.css';
import ProgressBar from './Progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const testData = [

    { profession: "Data Structures", bgcolor: "#F3810A", completed: 92 },
    { profession: "Database", bgcolor: "#F3810A", completed: 88 },
    { profession: "Computers Network", bgcolor: "#F3810A", completed: 90 },
    { profession: "Operating Systems", bgcolor: "#F3810A", completed: 89 },
    { profession: "Algorithmic", bgcolor: "#F3810A", completed: 91 },
    { profession: "Python", bgcolor: "#F3810A", completed: 93 },
    { profession: "Android Mobile", bgcolor: "#F3810A", completed: 100 },
    { profession: "Methods in software engineering", bgcolor: "#F3810A", completed: 94 },
    { profession: "Data Security", bgcolor: "#F3810A", completed: 88 },
];

const Skills = () => {
    return (
        <section id="Skills">
            <div className={style.container}>
                <h2 className={style.label} >MY SKILLS</h2>
                <h5>Grades in programming fields:</h5>
                {testData.map((item) => (
                    <div className={style.profession} >
                        <div className={style.name} >

                            <h1> <FontAwesomeIcon icon={faStar} /> {item.profession}   <ProgressBar key={item.bgcolor} bgcolor={item.bgcolor} completed={item.completed} /></h1>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}


export default Skills;

