import React from 'react';
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Summary.Module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div>
            <div className={style.summary}>
                <h1 className={style.title}>Summary</h1>
                <p className={style.data}>Software engineer with knowledge of Java, CPP, C, Python and C #.<br />
            During the degree I independently studied some of the languages ​​and prepared a few projects that interested me.<br />I also learned the Web field independently, the languages that ​​I know are: css, js, React, Angular, Node.js.<br />
            Now I'm also starting to look for my first job in the industry!<br />
            I'm looking for a full stack job or a software / back-end engineer. <br />
            It is important for me get to a place where I can continue to learn from the best in the field, where I can realize my abilities, take part in a significant product with people who will share with me the passion for the field!
         </p>
            </div>
            <div className={style.ability}>
                <h1 className={style.title}> PERSONAL SKILLS</h1>
                <p className={style.data}>Highly dependable Software Engineer and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.</p>
                <table className={style.table} >
                    <tbody>
                        <tr className={style.col}>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Critical thinking</td>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Self-motivated</td>
                        </tr>
                        <tr className={style.col}>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Well-versed in software tools</td>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Confident problem-solving abilities</td>
                        </tr>
                        <tr className={style.col}>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Able to work with limited supervision</td>
                            <td className={style.data}><FontAwesomeIcon icon={faCheck} />    Fast learner</td>
                        </tr>
                    </tbody>
                    <div className={style.cv}>

                        <a className={style.a} href="/CV_Avi_Shakuri.pdf" download><button className={style.btn} > <FontAwesomeIcon icon={faDownload} /> Download MY CV</button></a>

                    </div>
                </table>


            </div>
        </div>

    );
};

export default Summary;