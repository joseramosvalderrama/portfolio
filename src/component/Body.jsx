import Section from "./Section";

export default function Body() {
  return (
    <div className="bg-gray-50 mt-10">
      <Section
        title="Work experience"
        cardList={[
          {
            title: "Fullstack Developer",
            secondTitle: "Concentrio",
            period: "SEP 2022 - Now",
            description: "Software twin of vehicles from code base",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/spring/original.svg",
                iconTitle: "Spring boot",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/vuejs/original.svg",
                iconTitle: "VueJS",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/postgresql/original.svg",
                iconTitle: "Postgresql",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/neo4j/original.svg",
                iconTitle: "Neo4j",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/docker/original.svg",
                iconTitle: "Docker",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/jenkins/original.svg",
                iconTitle: "Jenkins",
              },
            ],
          },
          {
            title: "Java Fullstack Developer",
            secondTitle: "GMV",
            period: "NOV 2021 - SEP 2022",
            description: "Develop and test part of Galileo software",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/spring/original.svg",
                iconTitle: "Spring",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/oracle/original.svg",
                iconTitle: "Oracle",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/selenium/original.svg",
                iconTitle: "Selenium",
              },
            ],
          },
          {
            title: "Salesforce Developer",
            secondTitle: "Telefonica",
            period: "NOV 2020 - NOV 2021",
            description: "Salesforce app development for sales engineers",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/salesforce/original.svg",
                iconTitle: "Salesforce",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/python/original.svg",
                iconTitle: "Python",
              },
            ],
          },
        ]}
      />
      <Section
        title="Side projects"
        cardList={[
          {
            title: "Management app Aducex",
            secondTitle: "Fullstack webapp",
            description:
              "Web app developed for managing all the daily work of a small company",
            period: "2023",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/spring/original.svg",
                iconTitle: "Spring boot",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/react/original.svg",
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
            title: "Flat news Munich",
            secondTitle: "JS Web Scrapper",
            description:
              "It scrappes some flat websites and send the last updates throught telegram",
            period: "2024",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/nodejs/original.svg",
                iconTitle: "NodeJS",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/mongodb/original-wordmark.svg",
                iconTitle: "MongoDB",
              },
            ],
          },
          {
            title: "Concentrio Meal Traceability",
            secondTitle: "Fullstack webapp",
            description:
              "It stores daily votes to restaurants and traces the meals scores",
            period: "2024",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/nodejs/original.svg",
                iconTitle: "NodeJS",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/react/original.svg",
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
        ]}
      />
      <Section
        title="Education"
        cardList={[
          {
            title: "Cloud Apps Master",
            secondTitle: "Rey Juan Carlos",
            period: "2021 - 2022",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/docker/original.svg",
                iconTitle: "Docker",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/kubernetes/plain.svg",
                iconTitle: "Kubernetes",
              },
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg",
                iconTitle: "AWS",
              },
            ],
          },
          {
            title: "Software Engineer Bachelor",
            secondTitle: "Technical University Madrid",
            period: "2016 - 2021",
            techs: [
              {
                iconLink:
                  "https://devicon-website.vercel.app/api/git/original.svg",
                iconTitle: "Git",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
