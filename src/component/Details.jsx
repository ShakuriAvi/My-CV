import React from 'react';
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Details.Module.css';
import myProfile from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/myProfile.jpg';
const Details = () => {
    return (
        <div className={style.details}>
            <img className={style.image} src={myProfile} alt="" />
            <table className={style.table} >
                <tbody>
                    <tr className={style.col}>
                        <td className={style.title}>Name:</td>
                        <td className={style.data}>Avi Shakuri</td>

                    </tr>
                    <tr>
                        <td className={style.title}>Address:</td>
                        <td className={style.data}>Holon</td>

                    </tr>
                    <tr>
                        <td className={style.title}>Phone:</td>
                        <td className={style.data}>052-6766318</td>
                    </tr>
                    <tr>
                        <td className={style.title}>Email: </td>
                        <td className={style.data}>shakuri.avi96@gmail.com</td>
                    </tr>
                    <tr>
                        <td className={style.title}>Git: </td>
                        <td className={style.data}><a href="https://github.com/ShakuriAvi">https://github.com/ShakuriAvi</a></td>
                    </tr>
                    <tr>
                        <td className={style.title}>Linkedin: </td>
                        <td className={style.data}><a href="https://www.linkedin.com/in/avi-shakuri-4161301a6/">https://www.linkedin.com/in/avi-shakuri-4161301a6/</a></td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default Details;