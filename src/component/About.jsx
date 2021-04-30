import React from 'react';
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/About.Module.css';
import Summary from './Summary';
import MyDetail from './Details';

const About = () => {
    return (
        <section id="About">
            <div className={style.About} >

                <h2 className={style.Title} >ABOUT ME</h2>
                <div className={style.Row}>

                    <Summary />
                    <MyDetail />

                </div>
            </div>
        </section>

    );
};

export default About;