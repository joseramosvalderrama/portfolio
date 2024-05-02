import concentrioMealSnap from "../assets/concentrio_meal_traceability.png";
import flatScrapperSnap from "../assets/flatScrapper.png";
import aducexSnap from "../assets/aducexSnap.png";

const sideProjectData = [
  {
    title: "Concentrio Meal Traceability",
    secondTitle: "Fullstack webapp",
    description:
      "This project intention is to provide a way of tracing the daily meals from Concentrio employees from a quality perspective. Each employee votes daily for their meal from 0-5 and then an average score of the different cantinas is displayed.",
    period: "2024",
    snap: concentrioMealSnap,
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
      "It scrappes some flat websites and send the last updates through Telegram using a bot.",
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
      "Web app developed for managing all the daily work of a small company. It allows you to register all the daily work and manage a full database for all the clients and stakeholders.",
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
];
export default sideProjectData;
