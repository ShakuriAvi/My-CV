import React from 'react';
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Home.Module.css';
const Home = () => {
    return (
        <section id="Home">
            <div className={style.Home} >
                <div className={style.Data}>
                    <h2 className={style.Name} >Avi Shakuri CV</h2>
                    <div className={style.Subject} data-descr=" ENGINEER">SOFTWARE</div>
                </div>
            </div>
        </section>
    );
};

export default Home;