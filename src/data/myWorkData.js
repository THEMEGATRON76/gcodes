import cmis from "../assets/workWebsite/Cedric.png";
import seemsFit from "../assets/workWebsite/SeemsFit.jpg";
import umeedGagrana from "../assets/workWebsite/umeedGagrana.jpg";
import travel from "../assets/workWebsite/travelPlaner.jpg";
import shoppingCart from "../assets/workWebsite/shoppingCart.jpg";
import timeGame from "../assets/workWebsite/timeGame.jpg";
import tictactoe from "../assets/workWebsite/ticTacToe.jpg";
import notes from "../assets/workWebsite/projectNotes.jpg";
import quizApp from "../assets/workWebsite/quizApp.jpg";
import gautum from "../assets/workWebsite/gautam.jpg";
//import colledge from "../assets/workWebsite/collegeFinder.jpg";

import reactNative from "../assets/symbols/icons8-react-48.png";
import reduxImg from "../assets/symbols/icons8-redux-48.png";
import vueImg from "../assets/symbols/icons8-vue-js-48.png";
import tailWindImg from "../assets/symbols/icons8-tailwind-css-48.png";
import typeScript from "../assets/symbols/icons8-typescript-48.png";
import nodeImpg from "../assets/symbols/icons8-node-js-48.png";
import fireBase from "../assets/symbols/icons8-firebase-48.png";
import bootstrao from "../assets/symbols/icons8-bootstrap-48.png";
import wordpress from "../assets/symbols/icons8-wordpress-48.png";

const porjObj = [
  {
    heading: "CMIS",
    date: "12/12/41",
    desc: "It was an react native project focused for the delivery drivers and their operation",
    picture: cmis,
    alt: "cmis poject",
    techs: [
      { name: "React Native", img: reactNative, alt: "reactnative" },
      { name: "Redux", img: reduxImg, alt: "Redux" },
      { name: "Tailwind", img: tailWindImg, alt: "Redux" },
      { name: "Typescript", img: typeScript, alt: "TypeScript" },
    ],
    url: "https://www.cedricmillar.com/",
  },
  {
    heading: "Seems Fit",
    date: null,
    desc: "Seemsfit is a personal workout tracking platform that helps users plan, log, and track their fitness routines. It offers a growing library of pre-planned workouts and tools to monitor progress, making it easier for individuals at any fitness level to stay consistent and reach their goals.",
    picture: seemsFit,
    alt: "SeemsFit poject",
    techs: [
      { name: "React", img: reactNative, alt: "reactnative" },
      { name: "Tailwind", img: tailWindImg, alt: "Tailwind" },
      { name: "Firebase", img: fireBase, alt: "Firebase" },
    ],
    url: "https://seemsfit.com/",
  },
  {
    heading: "Gautam Granites",
    date: null,
    desc: "M/S Gautam Granites is a website showcasing the company's granite mining and export services. It highlights their expertise, quarry locations in Rajasthan, and commitment to delivering high-quality, durable granite to clients worldwide, while maintaining safety and sustainability standards.",
    picture: gautum,
    alt: "Gautum Granites",
    techs: [{ name: "Wordpress", img: wordpress, alt: "Wordpress" }],
    url: "https://www.gautamgranites.com/",
    //githubLink
  },
  {
    heading: "Umeed Gagrana",
    date: null,
    desc: "Umeed Gagrana is a website for a girls' PG accommodation that provides details about a safe, homely, and family-managed living space. It showcases the facilities, environment, and services offered to help students and working professionals find a comfortable and secure place to stay.",
    picture: umeedGagrana,
    alt: "SeemsFit poject",
    techs: [
      { name: "Vue", img: vueImg, alt: "Vue.js" },
      { name: "Bootstrap", img: bootstrao, alt: "Bootstrap" },
      { name: "Node", img: nodeImpg, alt: "Node.js" },
    ],
    url: null,
    //githubLink
  },
  {
    heading: "Travel Planner",
    date: null,
    desc: "Travel Planner is a website that helps you discover popular travel destinations, sort them based on your current location, and save your favorite places for future trips. It's designed to make planning your next adventure easy and personalized.",
    picture: travel,
    alt: "Travel Planner",
    techs: [
      { name: "React", img: reactNative, alt: "React" },
      { name: "Tailwind", img: tailWindImg, alt: "Tailwind" },
      { name: "Node", img: nodeImpg, alt: "Node.js" },
    ],
    url: null,
    //githubLink
  },
  {
    heading: "Time Game",
    date: null,
    desc: "Time Game is a fun and challenging timing-based game where players try to stop a timer as close as possible to a given target time. With multiple difficulty levels, it tests your precision and reflexes, and scores you based on how accurately you stop the timer.",
    picture: timeGame,
    alt: "time Game",
    techs: [
      { name: "React", img: reactNative, alt: "React" },
      { name: "bootstrap", img: bootstrao, alt: "Bootstrap" },
    ],
    url:"https://charming-cascaron-0e31f0.netlify.app/",
    //githubLink
  },
  {
    heading: "Tic Tac Toe",
    date: null,
    desc: "TicTacToe is a classic two-player game website where users can play the traditional Xs and Os game. It offers a simple and interactive way to enjoy quick matches, either against a friend.",
    picture: tictactoe,
    alt: "Tic Tac toe",
    techs: [
      { name: "React", img: reactNative, alt: "React" },
      { name: "Tailwind", img: tailWindImg, alt: "Tailwind" },
    ],
    url:"https://unrivaled-wisp-bf9af9.netlify.app/",
    //githubLink
  },
  {
    heading: "Elegent Context",
    date: null,
    desc: "Elegant Context is a frontend shopping cart demo that lets users add items to their cart and view the updated total in real-time. It showcases dynamic cart functionality, including quantity updates and price calculations, mimicking a real e-commerce experience.",
    picture: shoppingCart,
    alt: "Shopping cart",
    techs: [
      { name: "React", img: reactNative, alt: "React" },
      { name: "Tailwind", img: tailWindImg, alt: "Tailwind" },
    ],
    url: null,
    //githubLink
  },
  {
    heading: "Project viewer",
    date: null,
    desc: "Project Viewer is a frontend task management tool that lets users add projects with due dates, attach notes, and track their progress. It works like a to-do list, helping you stay organized and mark tasks as completed.",
    picture: notes,
    alt: "Shopping cart",
    techs: [{ name: "React", img: reactNative, alt: "React" }],
    url: null,
    //githubLink
  },
  {
    heading: "Quiz App",
    date: null,
    desc: "Quiz App is a timed quiz platform that presents a set of questions for users to answer within a time limit. It tracks your answers and calculates your final score based on accuracy and speed.",
    picture: quizApp,
    alt: "Shopping cart",
    techs: [{ name: "React", img: reactNative, alt: "React" }],
    url: null,
    //githubLink
  },
];

const homeWork = [porjObj[0], porjObj[1]]
export {porjObj,homeWork};
