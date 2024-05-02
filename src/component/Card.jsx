export default function Card(props) {
  const { title, secondTitle, description, period, techs } = props;
  return (
    <div className="m-5 flex flex-row">
      <div className="basis-1/5 m-5 flex justify-center items-center">
        <text className="text-gray-600">{period}</text>
      </div>
      <div>
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <p className="text-gray-700">{secondTitle}</p>
        <p>{description}</p>
        <div className="mt-4 flex">
          {techs.map((tech) => (
            <img
              src={tech.iconLink}
              className="w-8 mx-2 hover:opacity-75"
              title={tech.iconTitle}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}
