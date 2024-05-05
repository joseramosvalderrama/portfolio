import concentrioMealSnap from "../assets/concentrio_meal_traceability.png";
import flatScrapperSnap from "../assets/flatScrapper.png";
import aducexSnap from "../assets/aducexSnap.png";
import sharedExpensesSnap from "../assets/sharedExpensesSnap.png";
import chessSnap from "../assets/chessGUI.png";

const sideProjectData = [
  {
    title: "Concentrio Meal Traceability",
    secondTitle: "Fullstack webapp",
    description:
      "The objective of this project is to implement a system for tracking the daily meals of Concentrio employees, focusing on quality assessment. Each employee has the opportunity to rate their meal on a scale of 0 to 5 daily. Subsequently, the system calculates and displays the average scores for meals across various cantinas.",
    period: "In progress now",
    techs: [
      {
        iconLink: "https://devicon-website.vercel.app/api/nodejs/original.svg",
        iconTitle: "NodeJS",
      },
      {
        iconLink: "https://devicon-website.vercel.app/api/react/original.svg",
        iconTitle: "React",
      },
      {
        iconLink:
          "https://devicon-website.vercel.app/api/postgresql/original.svg",
        iconTitle: "PostgreSQL",
      },
      {
        iconLink:
          "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
        iconTitle: "Tailwindcss",
      },
    ],
  },
  {
    title: "Flat news Munich",
    secondTitle: "JS Web Scrapper",
    description:
      "The system scrapes data from flat websites and utilizes a Telegram bot to disseminate the latest updates.",
    period: "2024",
    snap: flatScrapperSnap,
    techs: [
      {
        iconLink: "https://devicon-website.vercel.app/api/nodejs/original.svg",
        iconTitle: "NodeJS",
      },
      {
        iconLink:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        iconTitle: "MongoDB",
      },
    ],
  },
  {
    title: "Management app Aducex",
    secondTitle: "Fullstack webapp",
    description:
      "This web application was developed to streamline the daily operations of a small company. It offers functionality for registering all daily tasks and maintains a comprehensive database for clients and stakeholders.",
    period: "2023",
    snap: aducexSnap,
    techs: [
      {
        iconLink: "https://devicon-website.vercel.app/api/spring/original.svg",
        iconTitle: "Spring boot",
      },
      {
        iconLink: "https://devicon-website.vercel.app/api/react/original.svg",
        iconTitle: "React",
      },
      {
        iconLink:
          "https://devicon-website.vercel.app/api/mysql/plain-wordmark.svg",
        iconTitle: "MySQL",
      },
    ],
  },
  {
    title: "Shared Expenses",
    secondTitle: "Fullstack webapp",
    description:
      "The application facilitates the management of shared expenses among groups such as families, friends, or couples. Users can effortlessly input shared expenses and quickly view the amount owed between different group members.",
    period: "2022",
    snap: sharedExpensesSnap,
    techs: [
      {
        iconLink: "https://devicon-website.vercel.app/api/spring/original.svg",
        iconTitle: "Spring boot",
      },
      {
        iconLink: "https://devicon-website.vercel.app/api/react/original.svg",
        iconTitle: "React",
      },
      {
        iconLink:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        iconTitle: "Typescript",
      },
    ],
  },
  {
    title: "Chess Design Patterns JS",
    secondTitle: "Final Project Master",
    description:
      "This project, undertaken as the final assignment of our Master's program, involved collaboration among three developers. Our objective was to explore various JavaScript coding styles for implementing design patterns. To achieve this, we developed a chess engine using Node.js as the framework.",
    snap: chessSnap,
    techs: [
      {
        iconLink: "https://devicon-website.vercel.app/api/nodejs/original.svg",
        iconTitle: "NodeJS",
      },
      {
        iconLink:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        iconTitle: "Javascript",
      },
      {
        iconLink:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        iconTitle: "Github Actions",
      },
    ],
  },
];
export default sideProjectData;
