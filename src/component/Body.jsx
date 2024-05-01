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
          },
          {
            title: "Java Fullstack Developer",
            secondTitle: "GMV",
            period: "NOV 2021 - SEP 2022",
            description: "Develop and test part of Galileo software",
          },
          {
            title: "Salesforce Developer",
            secondTitle: "Telefonica",
            period: "NOV 2020 - NOV 2021",
            description: "Salesforce app development for sales engineers",
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
          },
          {
            title: "Flat news Munich",
            secondTitle: "JS Web Scrapper",
            description:
              "It scrappes some flat websites and send the last updates throught telegram",
          },
          {
            title: "Concentrio Meal Traceability",
            secondTitle: "Fullstack webapp",
            description:
              "It stores daily votes to restaurants and traces the meals scores",
          },
        ]}
      />
      <Section
        title="Education"
        cardList={[
          {
            title: "Software Engineer Bachelor",
            secondTitle: "Technical University Madrid",
            period: "2016 - 2021",
          },
          {
            title: "Cloud Apps Master",
            secondTitle: "Rey Juan Carlos",
            period: "2021 - 2022",
          },
        ]}
      />
    </div>
  );
}
