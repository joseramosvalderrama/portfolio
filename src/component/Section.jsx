import Card from "./Card";

export default function Section(props) {
  const { title, cardList } = props;
  return (
    <div className="pt-5 px-14">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {cardList.map((card) => (
        <Card
          title={card.title}
          secondTitle={card.secondTitle}
          period={card.period}
          description={card.description}
          techs={card.techs}
          snap={card.snap}
        />
      ))}
    </div>
  );
}
