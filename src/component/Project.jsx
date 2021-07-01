import React from 'react';
import UnitProject from "./UnitProject";
import style from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/styles/Project.Module.css';
import goalMeet from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/GoalMeet.png';
import cardWar from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/cardWarPic.png';
import FlappyBird from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/flappyBirds.png';
import myWeb from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/myWeb.png';
import memoryGameAngular from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/memoryGameAngular.png';
import memoryGameSwift from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/memoryGameSwift.png';
import IPARK from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/IPARK.png';
import WhoIsCalling from 'C:/Users/shaku/OneDrive/Desktop/לימודים/React/my-web/src/image/WhoIsCalling.png';

const Project = () => {
    const testData = [

        {
            nameProject: "Goal Meet", tools: "Java / Firebase / Android Studio ", description: "Android App for meetings between different athletes in different sports: \n" +
                "chat and updates between users in real time,\n different permissions for different types of " +
                "users,\n working with Firebase,\n using different phone permissions such as photos and " +
                "more..", pictureHref: goalMeet, href: "https://github.com/ShakuriAvi/GoalMeet"
        },
        {
            nameProject: "IPARK", tools: "Swift / Maps / Xcode / Firebase", description: "Ios App, implemented by swift programing language on Xcode framework.\n" +
                "The goal of the application is that the user can save the parking location where he parked his car.\n" +
                "The application does not have to be for parking car,\n the user can share where he located by adding.\n" +
                "a photo, description of the location, date etc.\n" +
                "working with Firebase, using different phone permissions such as photos, Google Map and more. ", pictureHref: IPARK, href: "https://github.com/ShakuriAvi/IPARK"
        },
        {
            nameProject: "WhoIsCalling", tools: "Java / Firebase / Android Studio ", description: "Implemented ME app for android platform. There are numbers of features in \n" +
                "the app:  get notification who calling you, see how people are call you on their phone, search for a\n" +
                "specific cell phone number and get the owner name.The app implemented by firebase,\n" +
                "Animation, notifications, services, Permissions etc.", pictureHref: WhoIsCalling, href: "https://github.com/ShakuriAvi/Who-Is-Calling"
        },
        {
            nameProject: "Memory Game (Swift)", tools: "Swift / Maps / Xcode ", description: " Memory game: The game's goal is to remember where each of the existing pairs cards,\n" +
                "with a minimum of moves And in a minimum of time.\n In case the player's moves are smaller than his moves in the previous ten attempts,\n" +
                "the record enters the list of TopTen.\n" +
                "In Top-ten list shows the top ten result of game with location where the player played the game.", pictureHref: memoryGameSwift, href: "https://github.com/ShakuriAvi/MemoryGame-Swift"
        },
        {
            nameProject: "War-Card Game", tools: "Java / Google Maps / Android Studio  ", description: "Implementation of the war card game as an Android app with additional " +
                "options:\n character selection, different settings of running the game automatically or " +
                "manually,\n displaying records of the ten highest scores.\n " +
                "Working with Google Map and Threads.", pictureHref: cardWar, href: "https://github.com/ShakuriAvi/WarCardGame"
        },

        {
            nameProject: "FlappyBird", tools: "JavaScript / HTML / CSS ", description: " The goal of the game is to fly with the bird and move between the different pipes,\n" +
                " In the advanced stages of the game, the game will become more difficult.\n When at the end of the game the score of each game appears\n" +
                "and show option to start a new game.", pictureHref: FlappyBird, href: "https://github.com/ShakuriAvi/FlappyBird"
        },
        {
            nameProject: "Memory Game (Angular)", tools: "Angular / Js / CSS ", description: "Memory game: At the beginning of the game, the system randomly selects circles.\n" +
                "The player's goal is to click in the correct order on the circles,\n in the correct order as set by the system.\n Two players participate: the system and the user.\n Using local storage, animations and more ...", pictureHref: memoryGameAngular, href: "https://github.com/ShakuriAvi/MemoryGame-Angular"
        },
        {
            nameProject: "My Web", tools: "JavaScript / React / CSS ", description: " A site that summarizes my resume, made with React.", pictureHref: myWeb, href: "https://github.com/ShakuriAvi/my-CV"
        },
    ];
    return (
        <section id="Project">
            <div className={style.container}>
                <h2 className={style.label} >PORTFOLIO</h2>
                <div className={style.projects}>
                    {testData.map((item) => (
                        <UnitProject key={item.nameProject} title={item.nameProject} tools={item.tools} link={item.href} image={item.pictureHref} description={item.description} />


                    ))}
                </div>


            </div>
        </section>

    );
};

export default Project;