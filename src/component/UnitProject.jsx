import React from 'react';
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Project.Module.css';
const UnitProject = ({ title, tools, link, image, description }) => {
    return (
        <div className={style.unitProject}>
            <img className={style.image} src={image} alt="" />
            <h1 >{title}</h1>
            <h5 className={style.tools}> {tools}</h5>
            <ol>
                <div className={style.description}>{description}</div>
            </ol>
            <a className={style.a} href={link} > <button className={style.btn} > See Project </button></a>
        </div>
    );
};

export default UnitProject;